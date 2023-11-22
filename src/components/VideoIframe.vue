<template>
    <section class="video">
        <div class="container">
            <div class="video__player">
                <iframe
                    class="video__iframe"
                    src="https://youtu.be/XjnQLtjFLXM?si=xoDeW6ZIRDutDD-C"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <div class="video__container">
                <div class="video__content">
                    <h2 class="video__title">Философия Идущего к реке</h2>
                    <p class="video__channel">Правое полушарие интроверта</p>
                    <p class="video__info">
                        <span class="video__views"> 1 575 581 просмотр </span>
                        <span class="video__date">Дата премьеры: 16 авг. 2024 г.</span>
                    </p>
                    <p class="video__description">
                        Смотрите наш курс-саммари «Как понимать философию» фоном.
                    </p>
                </div>
                <button class="video__link favorite" href="/favorite.html">
                    <span class="video__no-favorite">Избранное</span>
                    <span class="video__favorite">В избранном</span>
                    <svg class="video__icon">
                        <use xlink:href="../assets/img/sprite.svg#star-ob" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VideoIframe',
};
</script>

<style scoped>
.video {
    padding-top: 80px;
}
.video__player {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-bottom: 32px;
}
.video__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
}
.video__container {
    display: flex;
    justify-content: space-between;
    gap: 34px;
}
.video__content {
    max-width: 1048px;
    hyphens: auto;
    overflow-wrap: anywhere;
}
.video__title {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
}
.video__channel {
    font-size: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
}
.video__info {
    font-size: 24px;
    letter-spacing: 0.02em;
}

.video__description {
    font-size: 24px;
    letter-spacing: 0.02em;
}
.video__link {
    flex-shrink: 0;
    align-self: flex-start;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 4px;
}

.video__link .video__no-favorite {
    display: flex;
    gap: 4px;
}
.video__link .video__favorite {
    display: none;
}
.video__link.active .video__no-favorite {
    display: none;
}
.video__link.active .video__favorite {
    display: flex;
    gap: 4px;
}
.video__icon {
    width: 20px;
    height: 20px;
}

@media screen and (max-width: 1024px) {
    .video {
        padding: 60px 0;
    }
    .video__content {
        max-width: 730px;
    }
    .video__title {
        font-size: 32px;
        margin-bottom: 24px;
    }
    .video__channel {
        font-size: 20px;
        margin-bottom: 20px;
    }
    .video__info {
        font-size: 20px;
    }
    .video__description {
        font-size: 20px;
    }
}
@media screen and (max-width: 768px) {
    .video__container {
        flex-direction: column-reverse;
    }
}
</style>
