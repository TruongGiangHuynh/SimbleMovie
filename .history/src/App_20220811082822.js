import { Fragment } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="baner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-lg ">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-lg ">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-lg ">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Top rated movies
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLerCgJHJcBA0X6NU6cJFNqEpnlNM85zIbjw&usqp=CAU"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-xl font-bold">Avenger 3</h3>
            <div className="flex items-center justify-between text-white text-sm opacity-50 mb-10">
              <span className="">2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 bg-primary text-white  capitalize w-full rounded-lg">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Now Playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <MovieCard></MovieCard>
        </div>
      </section>
      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl page-container-plus ">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLerCgJHJcBA0X6NU6cJFNqEpnlNM85zIbjw&usqp=CAU"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-xl font-bold">Avenger 3</h3>
            <div className="flex items-center justify-between text-white text-sm opacity-50 mb-10">
              <span className="">2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 bg-primary text-white  capitalize w-full rounded-lg">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
