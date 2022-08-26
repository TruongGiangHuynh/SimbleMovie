import { Fragment } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="baner h-[300px] page-container">
        <div className="w-full h-full rounded-lg bg-white"></div>
      </section>
    </Fragment>
  );
}

export default App;
