<template>
    <my-header />
    <main>
        <my-search />
        <video-list />
    </main>
    <my-footer />
</template>

<script>
import MySearch from '@/components/MySearch.vue';
import VideoList from '@/components/VideoList.vue';

export default {
    name: 'FavoritePage',
    computed: {
        username() {
            return this.$route.params.username;
        },
    },
    methods: {
        goToDashboard() {
            this.$router.push('/favorite');
        },
    },
    components: { MySearch, VideoList },
};
</script>

<style scoped></style>
