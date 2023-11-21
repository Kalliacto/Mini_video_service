<template>
    <li class="video-list__item">
        <article class="video-card">
            <router-link class="video-list__link" to="/video/:id">
                <img
                    class="video-card__thumbnail"
                    src="../assets/img/img2.jpg"
                    alt="Превью видео: Как выжить в Средние века?"
                />
                <h3 class="video-card__title">Как выжить в Средние века?</h3>
                <p class="video-card__channel">Правое полушарие интроверта</p>
                <p class="video-card__duration">31 мин 25 сек</p>
            </router-link>
            <button class="video-card__favorite" type="button" aria-label="Добавить в избранное">
                <svg class="video-card__icon">
                    <use class="star-o" xlink:href="../assets/img/sprite.svg#star-ob" />
                    <use class="star" xlink:href="../assets/img/sprite.svg#star" />
                </svg>
            </button>
        </article>
    </li>
</template>

<script>
export default {
    name: 'VideoCard',
};
</script>

<style scoped>
.video-card {
    position: relative;
}
.video-card__thumbnail {
    border-radius: 16px;
    margin-bottom: 12px;
    width: 100%;
}
.video-card__title {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
}
.video-card__channel {
    margin-bottom: 10px;
    letter-spacing: 0.02em;
}
.video-card__duration {
    font-size: 16px;
    letter-spacing: 0.02em;
}
.video-card__favorite {
    position: absolute;
    top: 12px;
    right: 12px;
}
.video-card__favorite .star {
    display: none;
}
.video-card__favorite.active .star {
    display: block;
}
.video-card__icon {
    width: 20px;
    height: 20px;
}
@media screen and (max-width: 1024px) {
    .video-card__title {
        font-size: 24px;
    }
    .video-card__channel {
        font-size: 20px;
    }
    .video-card__duration {
        font-size: 16px;
    }
}
@media screen and (max-width: 320px) {
    .video-card__title {
        font-size: 18px;
        margin-bottom: 6px;
    }
    .video-card__channel {
        margin-bottom: 6px;
    }
}
</style>
