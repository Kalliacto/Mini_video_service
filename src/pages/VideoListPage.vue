<template>
    <!-- <my-header /> -->
    <main>
        <my-hero />
        <my-search />
        <video-list title="Тренды" />
    </main>
    <my-footer />
</template>

<script>
import MySearch from '@/components/MySearch.vue';
import MyHero from '@/components/MyHero.vue';
import VideoList from '@/components/VideoList.vue';

export default {
    name: 'VideoListPage',
    computed: {
        username() {
            return this.$route.params.username;
        },
    },
    methods: {
        goToDashboard() {
            this.$router.push('/');
        },
    },
    components: { MySearch, MyHero, VideoList },
};
</script>

<style></style>
