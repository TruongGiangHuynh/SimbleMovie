import { Fragment } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="baner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
            alt=""
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
