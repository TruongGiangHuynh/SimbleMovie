import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>

      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Now Playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
