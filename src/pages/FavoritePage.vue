<template>
    <my-header />
    <main>
        <my-search />
        <video-list :title="`Избранное`" />
    </main>
    <my-footer />
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
</script>

<style></style>
