import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
export function NavLinkButton({ value, setActive, homePageButton }) {
  return (
    <NavLink
      to={`${value === "Tracker" ? "/" : value}`}
      className={`mr-2 w-1/3 text-center cursor-pointer border-black border-2 hover:bg-black hover:text-white transition-all duration-500 ${
        homePageButton ? "px-2 py-4 rounded" : "p-1"
      } lg:w-[15%]`}
      style={({ isActive }) => setActive(isActive)}
    >
      {value}
    </NavLink>
  );
}

function NavBar() {
  const { loggedIn, fullName } = useSelector(state => state.user);
  function setActive(isActive) {
    const black = "#000";
    const white = "#fff";
    return {
      backgroundColor: isActive ? black : "",
      color: isActive ? white : "",
    };
  }

  return (
    <nav className="w-screen h-[10%] flex justify-between items-center p-1 select-none lg:px-4">
      <NavLinkButton
        value="Tracker"
        setActive={setActive}
        homePageButton={true}
      />

      {/* //^ Options */}
      <ul className="flex w-[60%] lg:justify-end">
        <NavLinkButton value="Habits" setActive={setActive} />
        <NavLinkButton value="Todos" setActive={setActive} />
        {!loggedIn ? (
          <NavLinkButton value="Login" setActive={setActive} />
        ) : (
          <div className="flex justify-center items-center flex-col text-center m-auto">
            <div>
              <FaRegUserCircle className="text-2xl" />
            </div>
            <div className="text-sm">
              {fullName.charAt(0).toUpperCase() + fullName.slice(1)}
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
