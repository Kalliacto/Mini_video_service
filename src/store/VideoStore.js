import { defineStore } from 'pinia';

const API_KEY = 'AIzaSyBQY48SDfYUUZJEUbFFX2aDM9nKjvYIIfg';
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

const favoriteIds = localStorage.getItem('favoriteVideosYT')
    ? JSON.parse(localStorage.getItem('favoriteVideosYT'))
    : [];

export const useVideoStore = defineStore('VideoStore', {
    // state
    state: () => ({
        videos: [],
        oneVideo: {},
        similarView: [],
        favoriteIds: favoriteIds,
        favoriteList: [],
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
        async fetchSearchVideos(searchQuery, page = false) {
            try {
                let res;
                if (!page) {
                    res = await fetch(
                        `${SEARCH_URL}?part=snippet&q=${searchQuery}&type=video&key=${API_KEY}`
                    );
                }
                if (page) {
                    res = await fetch(
                        `${SEARCH_URL}?part=snippet&q=${searchQuery}&type=video&pageToken=${page}&key=${API_KEY}`
                    );
                }
                const videos = await res.json();
                return (this.similarView = videos.items);
            } catch (error) {
                return console.error('error: ', error);
            }
        },
        async fetchGetFavoriteVideos() {
            try {
                if (this.favoriteIds.length === 0) {
                    return { items: [] };
                }

                const res = await fetch(
                    `${VIDEOS_URL}?part=contentDetails,id,snippet,statistics&maxResults=12&id=${this.favoriteIds.join(
                        ','
                    )}&key=${API_KEY}`
                );
                const videos = await res.json();
                return (this.favoriteList = videos.items);
            } catch (error) {
                console.error('error: ', error);
            }
        },
        handleChangeFavorite(videoId) {
            if (this.favoriteIds.includes(videoId)) {
                this.favoriteIds.splice(this.favoriteIds.indexOf(videoId), 1);
                localStorage.setItem('favoriteVideosYT', JSON.stringify(this.favoriteIds));

                if (this.favoriteList.length) {
                    this.favoriteList.splice(
                        this.favoriteList.findIndex((el) => el.id === videoId),
                        1
                    );
                }
            } else {
                this.favoriteIds.push(videoId);
                localStorage.setItem('favoriteVideosYT', JSON.stringify(this.favoriteIds));
            }
        },
    },
    // getters
    getters: {},
});
