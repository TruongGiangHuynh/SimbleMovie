import { Fragment } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <div className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </div>
    </Fragment>
  );
}

export default App;
