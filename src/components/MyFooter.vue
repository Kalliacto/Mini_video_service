<template>
    <footer class="footer">
        <div class="container footer__container">
            <router-link class="footer__link" to="/">
                <svg
                    class="footer__logo"
                    viewBox="0 0 360 48"
                    role="img"
                    aria-label="Логотип сервиса You-Tvideo"
                >
                    <use xlink:href="../assets/img/sprite.svg#logo-white" />
                </svg>
            </router-link>

            <ul class="footer__developer">
                <li class="footer__developer-item">
                    Developer:
                    <a href="https://github.com/Kalliacto" target="_blank" rel="noopener"
                        >Kalliacto with Love&#129505;</a
                    >
                </li>
                <li class="footer__developer-item">© You-Tvideo, 2023</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'MyFooter',
};
</script>

<style scoped>
.footer {
    padding: 40px 0;
    background: #ff6a00 url(../assets/img/bg.jpg) no-repeat center/cover;
    color: #ffffff;
}
.footer__container {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 360px 1fr;
    gap: 16px 30px;
}
.footer__link {
    opacity: 1;
}
.footer__link:hover {
    opacity: 0.6;
}
.footer__logo {
    width: 360px;
}
.footer__developer {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    letter-spacing: 0.02em;
    align-items: flex-end;
}

@media screen and (max-width: 550px) {
    .footer__container {
        grid-template-columns: 1fr;
        align-items: flex-start;
        gap: 0;
    }
    .footer__logo {
        margin-bottom: 24px;
    }
    .footer__developer {
        align-items: flex-start;
    }
}
</style>
