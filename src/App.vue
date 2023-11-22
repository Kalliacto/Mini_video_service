<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
html {
    position: relative;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    overflow-x: hidden;
    min-width: 320px;
    min-height: 100vh;
    /* TODO: подключить шрифты */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    font-size: 20px;
    color: #292d32;
    background-color: #fff;
    line-height: 1.2;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#app {
    position: relative;
    display: flex;
    flex-direction: column;
}

main {
    min-height: 80vh;
}

img,
svg {
    display: block;
    max-width: 100%;
    height: auto;
}

svg {
    max-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0;
    margin: 0;
}

button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

iframe {
    border: none;
}

/* Доступноу скрытие элементов */
.visually-hidden {
    position: fixed;
    transform: scale(0);
}
/*Пример контейнера: Если контейнер 1180px по макету,
то для max-width прибавляем паддинги 30px*2, 
в итоге 1240px Чтобы контент не прижимался к краям экрана
*/

.container {
    --container-width: 1260px;
    --container-padding: 30px;
    max-width: calc(var(--container-width) + var(--container-padding) * 2);
    padding: 0 var(--container-padding);
    margin: 0 auto;
}

@media screen and (max-width: 1024px) {
    .container {
        --container-width: 942px;
    }
}

@media screen and (max-width: 768px) {
    .container {
        --container-width: 624px;
    }
}

@media screen and (max-width: 540px) {
    .container {
        --container-padding: 11px;
    }
}
</style>
