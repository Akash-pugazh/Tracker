import React from "react";
import { NavLink } from "react-router-dom";

function NavLinkButton({ value, setActive, homePageButton }) {
  return (
    <NavLink
      to={`${value === "Tracker" ? "/" : value}`}
      className={`mr-2 w-1/3 text-center cursor-pointer border-black border-2 hover:bg-black hover:text-white transition-all duration-500 ${
        homePageButton ? "p-2 rounded" : "p-1"
      } `}
      style={({ isActive }) => setActive(isActive)}
    >
      {value}
    </NavLink>
  );
}

function NavBar() {
  function setActive(isActive) {
    const black = "#000";
    const white = "#fff";
    return {
      backgroundColor: isActive ? black : "",
      color: isActive ? white : "",
    };
  }

  return (
    <nav className="w-screen h-[10%] flex justify-between items-center p-1 select-none">
      <NavLinkButton
        value="Tracker"
        setActive={setActive}
        homePageButton={true}
      />

      {/* //^ Options */}
      <ul className="flex w-[60%]">
        <NavLinkButton value="Habits" setActive={setActive} />
        <NavLinkButton value="Todos" setActive={setActive} />
        <NavLinkButton value="Lofi" setActive={setActive} />
      </ul>
    </nav>
  );
}

export default NavBar;
