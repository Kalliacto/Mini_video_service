<template>
    <header class="header">
        <div class="container header__container">
            <router-link class="header__link" to="/">
                <svg
                    class="header__logo"
                    viewBox="0 0 240 32"
                    role="img"
                    aria-label="Логотип сервиса You-Tvideo"
                >
                    <use xlink:href="../assets/img/sprite.svg#logo-orange" />
                </svg>
            </router-link>
            <router-link class="header__link header__link_favorite" to="/favorite">
                <span>Избранное</span>

                <svg class="header__icon">
                    <use xlink:href="../assets/img/sprite.svg#star-ob" />
                </svg>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'MyHeader',
};
</script>

<style>
.header {
    padding: 32px 0 24px;
}
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
    width: 240px;
}
.header__link_favorite {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    letter-spacing: 0.02em;
}
.header__icon {
    width: 20px;
    height: 20px;
}

@media screen and (max-width: 550px) {
    /* .header__container {
        flex-direction: column;
    }
    TODO: сделать условную отрисовку только звезды
    .header__logo {
        margin-bottom: 24px;
    } */
}
</style>
