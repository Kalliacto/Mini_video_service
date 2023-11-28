<template>
    <li class="video-list__item">
        <article class="video-card">
            <router-link class="video-list__link" :to="'/video/' + props.video.id">
                <img
                    class="video-card__thumbnail"
                    :src="img"
                    alt="Превью видео: Как выжить в Средние века?"
                />
                <h3 class="video-card__title">{{ props.video.snippet.title }}</h3>
                <p class="video-card__channel">{{ props.video.snippet.channelTitle }}</p>
                <p class="video-card__duration" v-if="props.video.contentDetails">
                    {{ convertDuration(props.video.contentDetails.duration) }}
                </p>
            </router-link>
            <button
                @click="change(props.video.id)"
                class="video-card__favorite"
                type="button"
                aria-label="Добавить в избранное"
            >
                <!-- <svg class="video-card__icon" :class="isFavorite ? 'active' : ''"> -->
                <svg class="video-card__icon">
                    <use
                        class="star"
                        xlink:href="../assets/img/sprite.svg#star-ob"
                        v-if="!isFavorite"
                    />
                    <use
                        class="star"
                        xlink:href="../assets/img/sprite.svg#star"
                        v-if="isFavorite"
                    />
                </svg>
            </button>
        </article>
    </li>
</template>

<script setup>
import { convertDuration } from '@/utils/utils';
import { defineProps, ref } from 'vue';
import { useVideoStore } from '@/store/VideoStore';
const store = useVideoStore();

const props = defineProps({
    video: Object,
});

let isFavorite = ref(store.favoriteIds.includes(props.video.id));

const change = (id) => {
    store.handleChangeFavorite(id);

    if (isFavorite.value) {
        return (isFavorite.value = false);
    } else {
        return (isFavorite.value = true);
    }
};

const img =
    props.video.snippet.thumbnails.standard?.url || props.video.snippet.thumbnails.high?.url;
</script>

<style>
.video-card {
    position: relative;
}
.video-card__thumbnail {
    border-radius: 16px;
    margin-bottom: 12px;
    width: 100%;
}
.video-card__title {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
}
.video-card__channel {
    margin-bottom: 10px;
    letter-spacing: 0.02em;
}
.video-card__duration {
    font-size: 16px;
    letter-spacing: 0.02em;
}
.video-card__favorite {
    position: absolute;
    top: 12px;
    right: 12px;
}
/* 
.video-card__favorite .star {
    display: none;
}
.video-card__favorite.active .star {
    display: block;
}
*/
.video-card__icon {
    width: 20px;
    height: 20px;
}
@media screen and (max-width: 1024px) {
    .video-card__title {
        font-size: 24px;
    }
    .video-card__channel {
        font-size: 20px;
    }
    .video-card__duration {
        font-size: 16px;
    }
}
@media screen and (max-width: 320px) {
    .video-card__title {
        font-size: 18px;
        margin-bottom: 6px;
    }
    .video-card__channel {
        margin-bottom: 6px;
    }
}
</style>
