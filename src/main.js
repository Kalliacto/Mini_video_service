import { createApp } from 'vue';
import App from './App.vue';
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';
import VideoPage from '@/pages/VideoPage';
import VideoListPage from '@/pages/VideoListPage';
import FavoritePage from '@/pages/FavoritePage';
import { createRouter, createWebHashHistory } from 'vue-router';

const app = createApp(App);
app.component('my-header', MyHeader)
    .component('my-footer', MyFooter)
    .component('video-list-page', VideoListPage)
    .component('video-page', VideoPage);

const routes = [
    { path: '/', component: VideoListPage },
    { path: '/video/:id', component: VideoPage },
    { path: '/favorite', component: FavoritePage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

app.use(router);

app.mount('#app');
