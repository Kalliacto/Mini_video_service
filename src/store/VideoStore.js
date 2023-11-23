import { defineStore } from 'pinia';

const API_KEY = 'AIzaSyBQY48SDfYUUZJEUbFFX2aDM9nKjvYIIfg';
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';

export const useVideoStore = defineStore('VideoStore', {
    // state
    state: () => ({
        videos: [],
        oneVideo: {},
    }),
    // actions
    actions: {
        async fetchTrendingVideos() {
            try {
                const res = await fetch(
                    `${VIDEOS_URL}?part=contentDetails,id,snippet,statistics&chart=mostPopular&regionCode=RU&maxResults=12&key=${API_KEY}`
                );
                const arrItems = await res.json();
                return (this.videos = arrItems.items);
            } catch (error) {
                return console.error('error: ', error);
            }
        },
        async fetchOneVideo(idVideo) {
            try {
                const res = await fetch(
                    `${VIDEOS_URL}?part=contentDetails,id,snippet,statistics&id=${idVideo}&key=${API_KEY}`
                );
                const video = await res.json();
                return (this.oneVideo = video.items[0]);
            } catch (error) {
                return console.error('error: ', error);
            }
        },
    },
    // getters
    getters: {},
});
