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
