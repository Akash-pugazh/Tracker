import React from "react";
import StreakCard from "./StreakCard";

function Streaks({ habitsList }) {
  return (
    <div className="text-lg mb-2 border border-black p-1 rounded-md">
      <h1 className="rounded-md font-semibold bg-black text-white text-center py-1">
        Your Streaks
      </h1>
      <div className="grid grid-cols-5 place-items-center px-2 pt-2 lg:grid-cols-10">
        {habitsList.map(el => (
          <StreakCard
            key={el.id}
            habit={el.habit}
            streakCount={el.streakCount}
          />  
        ))}
      </div>
    </div>
  );
}

export default Streaks;
