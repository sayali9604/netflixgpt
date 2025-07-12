// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useMovieTrailer = (movieID) => {
//   const dispatch = useDispatch();

//   //fetch trailer video & updating the store with trailer video data.
//   const getMovieVideos = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/"+
//       movieID +
//       "/videos?language=en-US",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];
//     dispatch(addTrailerVideo(trailer));
//   };
//   useEffect(() => {
//     getMovieVideos();
//   }, [movieID]);
// };
// export default useMovieTrailer;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_OPTIONS
      );

      if (!data.ok) {
        console.error("❌ Failed to fetch:", data.statusText);
        dispatch(addTrailerVideo(null));
        return;
      }

      const json = await data.json();
      console.log("🎬 Video API response:", json);

      if (!json?.results?.length) {
        dispatch(addTrailerVideo(null));
        return;
      }

      const trailer = json.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      ) || null;

      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.error("🚨 API error:", err.message);
      dispatch(addTrailerVideo(null));
    }
  };

  useEffect(() => {
    if (movieID) getMovieVideos();
  }, [movieID]);
};

export default useMovieTrailer;
