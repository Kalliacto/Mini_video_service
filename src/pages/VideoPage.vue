<template>
    <my-header />
    <main>
        <my-search />
        <video-iframe :video="store.oneVideo" />
        <video-list title="Тренды" />
    </main>
    <my-footer />
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
import VideoIframe from '@/components/VideoIframe.vue';
import { useRouter } from 'vue-router';
import { useVideoStore } from '@/store/VideoStore';
const store = useVideoStore();
const router = useRouter();
const id = router.currentRoute._value.params.id;

store.fetchOneVideo(id);
</script>

<style scoped></style>
