import React from "react";
import { NavLink } from "react-router-dom";
function HomePage() {
  return (
    <div className="w-screen h-[90%] p-2 lg:px-4">
      <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-8">React Tracker App</h1>
        <p className=" max-w-full text-base mb-8 text-center leading-10 px-2">
          Hey You! Track
          <span className="bg-green-500 px-2 py-1 rounded mx-1 text-lg">
            Habits
          </span>
          and
          <span className="bg-green-500 px-2 py-1 rounded mx-1 text-lg">
            Tasks
          </span>
          and stay productive!
        </p>
        <NavLink
          to="Login"
          className="p-2 px-4 text-center cursor-pointer border-white border-2 hover:bg-white hover:text-black transition-all duration-200 ease-in-out lg:w-[15%] rounded "
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
