<template>
    <my-header />
    <main>
        <my-search />
        <video-list :title="`По запросу найдено...`" :videos="store.similarView" />
    </main>
    <my-footer />
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue';
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
import { useVideoStore } from '@/store/VideoStore';

const store = useVideoStore();
</script>

<style scoped></style>
