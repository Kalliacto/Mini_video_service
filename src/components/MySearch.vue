<template>
    <section class="search">
        <div class="container">
            <form class="search__form">
                <input class="search__input" type="search" placeholder="Найти видео..." />
                <button class="search__btn" type="submit">
                    <span>поиск</span>
                    <svg class="search__icon">
                        <use xlink:href="../assets/img/sprite.svg#search" />
                    </svg>
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MySearch',
};
</script>

<style scoped>
.search__form {
    display: flex;
    color: #292d32;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 0.32px;
    position: relative;
    width: 100%;
}
.search__input {
    width: 100%;
    padding: 10px 114px 10px 24px;
    border-radius: 40px;
    border: #ff6a00 1px solid;
    font-size: 16px;
    letter-spacing: 0.02em;
    outline: none;
}
.search__btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ff6a00;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 4px;
    border-radius: 40px;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0.02em;
}
.search__icon {
    width: 20px;
    height: 20px;
}
@media screen and (max-width: 320px) {
    .search__input {
        padding: 10px 74px 10px 24px;
    }
}
</style>
