<template>
    <section class="hero">
        <div class="container">
            <div class="hero__container">
                <router-link class="hero__link" to="/favorite">
                    <span>Избранное</span>
                    <svg class="hero__icon">
                        <use xlink:href="../assets/img/sprite.svg#star-ow" />
                    </svg>
                </router-link>
                <svg
                    class="hero__logo"
                    viewBox="0 0 360 58"
                    role="img"
                    aria-label="Логотип сервиса You-Tvideo"
                >
                    <use xlink:href="../assets/img/sprite.svg#logo-white" />
                </svg>
                <h1 class="hero__title">Смотри. Загружай. Создавай</h1>
                <p class="hero__tagline">Удобный видеохостинг для тебя</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MyHero',
};
</script>

<style scoped>
.hero {
    padding: 60px 0 80px;
    background: #ff6a00 url(@/assets/img/bg.jpg) no-repeat center/cover;
    color: #ffffff;
    margin-bottom: 32px;
}
.hero__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.hero__link {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    top: -36px;
    right: 0;
    font-size: 16px;
    letter-spacing: 0.02em;
}
.hero__icon {
    width: 20px;
    height: 20px;
}
.hero__logo {
    width: 240px;
    margin-bottom: 80px;
}
.hero__title {
    font-size: 70px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
}
.hero__tagline {
    letter-spacing: 0.02em;
    text-align: center;
}
@media screen and (max-width: 1024px) {
    .hero {
        padding: 40px 0 58px;
    }
    .hero__logo {
        max-width: 200px;
        margin-bottom: 25px;
    }
    .hero__title {
        font-size: 50px;
        margin-bottom: 32px;
    }
    .hero__link {
        top: -16px;
    }
}

@media screen and (max-width: 768px) {
    .hero {
        padding-bottom: 42px;
    }
    .hero__title {
        font-size: 40px;
    }
    .hero__link span {
        position: fixed;
        transform: scale(0);
    }
}

@media screen and (max-width: 540px) {
    .hero {
        padding: 16px 0 32px;
        margin-bottom: 20px;
    }
    .hero__container {
        display: grid;
        justify-content: space-between;
        align-items: center;
    }
    .hero__logo {
        width: 200px;
        grid-row: 1/2;
        grid-column: 1/2;
        margin-bottom: 0;
    }
    .hero__link {
        position: static;
        grid-row: 1/2;
        grid-column: 3/3;
        justify-self: end;
    }
    .hero__title {
        grid-column: 1/3;
        font-size: 24px;
        margin-bottom: 0;
        margin-top: 0;
        padding: 25px 0 20px;
    }
    .hero__tagline {
        grid-column: 1/3;
        font-size: 16px;
    }
}
</style>
