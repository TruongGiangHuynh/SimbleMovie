import React from "react";

const MovieCard = () => {
  return (
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
  );
};

export default MovieCard;
