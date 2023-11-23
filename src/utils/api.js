// export const fetchGetFavoriteVideos = async () => {
//     try {
//         if (favoriteIds.length === 0) {
//             return { items: [] };
//         }
//         const response = await fetch(
//             `${VIDEOS_URL}?part=contentDetails,id,snippet,statistics&maxResults=12&id=${favoriteIds.join(
//                 ','
//             )}&key=${API_KEY}`
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP error ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('error: ', error);
//     }
// };

// export const fetchSearchVideos = async (searchQuery, page = false) => {
//     try {
//         // const response = await fetch(
//         //     `${SEARCH_URL}?part=snippet&q=${searchQuery}&type=video&key=${API_KEY}`
//         // );
//         const url = new URL(SEARCH_URL);
//         url.searchParams.append('part', 'snippet');
//         url.searchParams.append('q', searchQuery);
//         url.searchParams.append('type', 'video');
//         url.searchParams.append('key', API_KEY);
//         if (page) {
//             url.searchParams.append('pageToken', page);
//         }
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('error: ', error);
//     }
// };
