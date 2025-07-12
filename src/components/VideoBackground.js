// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// //props are not destructured properly check it it can give error.
// const VideoBackground = ({movieID}) => {
//   useMovieTrailer(movieID); 
// const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//   return (
//     <div className="w-screen">
//       <iframe
//         className="w-screen aspect-video"
//         src={"https://www.youtube.com/embed/" + trailerVideo?.key}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//       ></iframe>
      
//     </div>
//   );
// };

// export default VideoBackground;
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  useMovieTrailer(movieID);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//fallback ui if app fail to fetch data it will shows this.
  if (!trailerVideo?.key) {
    return <p className="text-white text-center">Loading trailer...</p>;
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
