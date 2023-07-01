import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFoundPage() {
  return (
    <div className="h-[75%] w-full Wrapper flex justify-center items-center">
      <div className="text-center">
        <h1 className="pb-1">OOPS!</h1>
        <p className="pb-3">Page Not Found</p>
        <NavLink className="border-2 border-black p-2 rounded-md hover:bg-black hover:text-white transition-all duration-500">
          Go To Home
        </NavLink>
      </div>
    </div>
  );
}

export default PageNotFoundPage;
