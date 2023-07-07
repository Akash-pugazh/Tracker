import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function HomePage() {
  const { loggedIn, fullName } = useSelector(state => state.user);

  return (
    <div className="w-screen h-[90%] p-2 lg:px-4">
      <div className="w-full h-full flex flex-col items-center justify-center  rounded-lg">
        <h1 className="text-4xl font-bold mb-8">React Tracker App</h1>
        <p className=" max-w-full text-base mb-8 flex items-center text-center  px-2">
          Hey You! Track Habits and Tasks and stay productive!
        </p>
        {!loggedIn ? (
          <NavLink
            to="Login"
            className="p-2 px-4 text-center cursor-pointer border-black border-2 hover:bg-black hover:text-white transition-all duration-200 ease-in-out lg:w-[15%] rounded "
          >
            Log In
          </NavLink>
        ) : (
          <div className="text-base">
            Hello There !
            <div className="bg-green-500 px-2 py-1 text-center text-white rounded mx-1 text-lg">
              {fullName}
            </div>
          </div>
        )}
        <footer className="absolute bottom-2 text-sm font-mono">
          Created by
          <span className="bg-blue-200 ml-2 py-1 px-2 rounded-md font-semibold">
            Virus
          </span>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
