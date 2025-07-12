import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
    const movies = useSelector(store=> store.movies?. nowPlayingMovies) //this is optional chaining
    if(!movies) return; //this is known as early return

    const mainMovie = movies[1];

    const {original_title, overview, id } = mainMovie;
    return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer;