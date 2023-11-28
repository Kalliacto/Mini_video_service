<template>
    <main>
        <my-hero />
        <my-search />
        <video-list :title="`Тренды`" :videos="store.videos" />
    </main>
    <my-footer />
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import MyHero from '@/components/MyHero.vue';
import VideoList from '@/components/VideoList.vue';
import { useVideoStore } from '@/store/VideoStore';

const store = useVideoStore();
</script>

<style></style>
