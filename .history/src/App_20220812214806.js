import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
