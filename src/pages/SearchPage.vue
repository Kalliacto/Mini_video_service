<template>
    <my-header />
    <my-search />
    <video-list :title="`По запросу найдено...`" :videos="store.similarView" />
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue';
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
import { useVideoStore } from '@/store/VideoStore';

const store = useVideoStore();
console.log(1);
</script>

<style scoped></style>
