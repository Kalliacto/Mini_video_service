<template>
    <div class="preload">
        <p class="preload__text">Загрузка...</p>
    </div>
</template>

<script>
export default {
    name: 'MyPreload',
};
</script>

<style scoped>
main {
    display: flex;
    margin: auto;
}
.preload {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
}
.preload__text {
    color: #ff6a00;
}
</style>
