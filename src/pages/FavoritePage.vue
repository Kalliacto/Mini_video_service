<template>
    <my-header />
    <main>
        <my-search />
        <video-list :title="`Избранное`" :videos="store.favoriteList" />
    </main>
    <my-footer />
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';

import { useVideoStore } from '@/store/VideoStore';
const store = useVideoStore();
store.fetchGetFavoriteVideos();
</script>

<style></style>
