import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

function Root() {
  return (
    <main className="h-screen w-screen text-xl">
      <NavBar />
      <Outlet />
    </main>
  );
}

export default Root;
