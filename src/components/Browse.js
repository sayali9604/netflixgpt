

import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies(); //this hook is fetching the popular movies and updating the store.
 
  return (
    <div>
     <Header />
     <MainContainer />
     <SecondaryContainer /> 
     {/*
      MainContainer
        -VideoBackground
        -VideoTitle
      SecondaryContainer
        -MoviesList * n
        - cards * n

     */}
    </div>
  )
}

export default Browse