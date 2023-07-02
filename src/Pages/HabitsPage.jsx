import React from "react";
import TableComponent from "../Components/HabitPage/TableComponent";
import IconButton from "../Components/IconButton";
import { FiPlus } from "react-icons/fi";

function HabitsPage() {
  const habits = ["Workout", "Meditate", "Code", "WatchAnime", "Bat"];
  return (
    <section className="w-screen h-[90%] px-2 py-1 lg:px-4">
      <div className="w-full bg-black h-[8%] mb-2">
        <h2 className="text-white font-semibold text-center h-full flex items-center justify-center">
          HabitsPage
        </h2>
      </div>
      <div className=" w-full mb-2 flex items-center text-base relative">
        <span className=" inline-block w-1/2 pl-1">Add a habit :</span>
        <span className=" inline-block text-end text-xl w-1/2">
          <IconButton>
            <FiPlus />
          </IconButton>
        </span>
      </div>
      <div className="text-lg mb-2 border border-black p-1 rounded-md">
        <h1 className="rounded-md font-semibold bg-black text-white text-center ">
          Your Streaks
        </h1>
        <div className="grid grid-cols-4 px-2 py-1">
          {habits.map(habit => {
            return (
              <div key={habit}>
                <p className="text-base text-gray-700 pr-2">{habit}</p>
                <span className="border-2 p-2 bg-green-300 w-max block rounded-md text-gray-500 border-gray-500">
                  3
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[42%] mb-2">
        <TableComponent />
      </div>
    </section>
  );
}

export default HabitsPage;
