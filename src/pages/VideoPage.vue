<template>
    <my-header />
    VideoPage
</template>

<script>
export default {
    name: 'VideoPage',
    computed: {
        username() {
            // We will see what `params` is shortly
            return this.$route.params.username;
        },
    },
    methods: {
        goToDashboard() {
            this.$router.push('/video/:id');
        },
    },
};
</script>

<style scoped></style>
