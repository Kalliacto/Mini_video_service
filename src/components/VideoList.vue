<template>
    <section class="video-list">
        <div class="container" v-if="props.videos?.length">
            <h2 class="video-list__title">{{ title }}</h2>
            <ul class="video-list__items">
                <video-card v-for="video in props.videos" :video="video" :key="video.id" />
            </ul>
        </div>
        <div class="container" v-else>
            <h2 class="video-list__title">{{ title }} не найдены...</h2>
        </div>
    </section>
</template>

<script setup>
import VideoCard from '@/components/VideoCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
    videos: Object,
    title: String,
});
</script>

<style scoped>
.video-list {
    padding: 80px 0;
}
.video-list__title {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin-bottom: 40px;
}
.video-list__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}
@media screen and (max-width: 1024px) {
    .video-list {
        padding: 60px 0;
    }
    .video-list__items {
        row-gap: 32px;
    }
    .video-list__title {
        font-size: 32px;
        margin-bottom: 40px;
    }
}
@media screen and (max-width: 768px) {
    .video-list__items {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px 32px;
    }
    .video-list__items {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .video-list {
        padding: 40px 0;
    }
}
@media screen and (max-width: 320px) {
    .video-list__title {
        font-size: 24px;
        margin-bottom: 20px;
    }
    .video-list__items {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
</style>
