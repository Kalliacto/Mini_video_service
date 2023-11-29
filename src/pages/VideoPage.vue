<template>
    <my-header />
    <main>
        <my-search />
        <video-iframe :video="store.oneVideo" :id="id" v-if="Object.keys(store.oneVideo).length" />
        <video-list
            :title="`Похожие видео`"
            :videos="store.similarView"
            v-if="store.oneVideo.kind"
        />
        <div class="container" v-else>
            <my-preload />
        </div>
    </main>
    <my-footer />
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
import VideoIframe from '@/components/VideoIframe.vue';
import MyPreload from '@/components/MyPreload.vue';
import { useRouter } from 'vue-router';
import { useVideoStore } from '@/store/VideoStore';
import { watchEffect } from 'vue';

const store = useVideoStore();
const router = useRouter();
const id = router.currentRoute._value.params.id;

watchEffect(async () => {
    await store.fetchOneVideo(id);

    await store.oneVideo.id;

    if (store.oneVideo.kind) {
        const searchQuery = store.oneVideo.snippet.title;
        store.fetchSearchVideos(searchQuery);
    }
});
</script>

<style scoped></style>
