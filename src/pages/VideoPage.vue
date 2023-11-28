<template>
    <my-header />
    <main>
        <my-search />
        <video-iframe :video="store.oneVideo" v-if="Object.keys(store.oneVideo).length" />
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

const store = useVideoStore();
const router = useRouter();
const id = router.currentRoute._value.params.id;
// Чтото теряется в сторе при отрисовке лайка

store.fetchOneVideo(id);

if (store.oneVideo.kind) {
    const searchQuery = store.oneVideo.snippet.title;
    // console.log(searchQuery);
    store.fetchSearchVideos(searchQuery);
}
</script>

<style scoped></style>
