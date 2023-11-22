<template>
    <my-header />
    <main>
        <my-search />
        <video-iframe />
        <video-list title="Тренды" />
    </main>
    <my-footer />
</template>

<script>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';
import VideoIframe from '@/components/VideoIframe.vue';

export default {
    name: 'VideoPage',
    computed: {
        username() {
            return this.$route.params.username;
        },
    },
    methods: {
        goToDashboard() {
            this.$router.push('/video/:id');
        },
    },
    components: { MySearch, VideoList, VideoIframe },
};
</script>

<style scoped></style>
