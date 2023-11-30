<template>
    <section class="video">
        <div class="container">
            <div class="video__player">
                <iframe
                    class="video__iframe"
                    :src="'https://www.youtube.com/embed/' + props.video.id"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div class="video__container">
                <div class="video__content">
                    <h2 class="video__title">{{ props.video.snippet?.title }}</h2>
                    <p class="video__channel">{{ props.video.snippet.channelTitle }}</p>
                    <p class="video__info">
                        <span class="video__views">
                            Просмотры:
                            {{ parseInt(props.video.statistics.viewCount).toLocaleString() }} </span
                        >&nbsp;
                        <span class="video__date"
                            >Дата премьеры: {{ formatDate(props.video.snippet.publishedAt) }}</span
                        >
                    </p>
                    <p class="video__description">
                        {{ props.video.snippet.description }}
                    </p>
                </div>
                <button
                    @click="change(props.video.id.videoId || props.video.id)"
                    class="video__link favorite"
                    href="/favorite.html"
                >
                    <span v-if="!isFavoriteV" class="video__favorite">Избранное</span>
                    <span v-else class="video__favorite">В избранном</span>
                    <svg class="video__icon">
                        <use v-if="!isFavoriteV" xlink:href="../assets/img/sprite.svg#star-ob" />
                        <use class="star" xlink:href="../assets/img/sprite.svg#star" v-else />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, ref, watchEffect } from 'vue';
import { formatDate } from '@/utils/utils';

import { useVideoStore } from '@/store/VideoStore';
const store = useVideoStore();

const props = defineProps({
    video: Object,
    id: String,
});

let isFavoriteV;

watchEffect(() => {
    if (props.id === props.video.id) {
        isFavoriteV = ref(store.favoriteIds.includes(props.video.id));
    }
});

const change = (id) => {
    store.handleChangeFavorite(id);

    if (isFavoriteV.value) {
        return (isFavoriteV.value = false);
    } else {
        return (isFavoriteV.value = true);
    }
};
</script>

<style>
.video {
    padding-top: 80px;
}
.video__player {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-bottom: 32px;
}
.video__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
}
.video__container {
    display: flex;
    justify-content: space-between;
    gap: 34px;
}
.video__content {
    max-width: 1048px;
    hyphens: auto;
    overflow-wrap: anywhere;
}
.video__title {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
}
.video__channel {
    font-size: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
}
.video__info {
    font-size: 24px;
    letter-spacing: 0.02em;
}

.video__description {
    font-size: 24px;
    letter-spacing: 0.02em;
}
.video__link {
    flex-shrink: 0;
    align-self: flex-start;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 4px;
}

.video__icon {
    width: 20px;
    height: 20px;
}

@media screen and (max-width: 1024px) {
    .video {
        padding: 60px 0;
    }
    .video__content {
        max-width: 730px;
    }
    .video__title {
        font-size: 32px;
        margin-bottom: 24px;
    }
    .video__channel {
        font-size: 20px;
        margin-bottom: 20px;
    }
    .video__info {
        font-size: 20px;
    }
    .video__description {
        font-size: 20px;
    }
}
@media screen and (max-width: 768px) {
    /* .video__container {
        flex-direction: column-reverse;
    } */
    .video__favorite {
        display: none;
    }
}
</style>
