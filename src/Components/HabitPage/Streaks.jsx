import React from "react";
import StreakCard from "./StreakCard";

function Streaks({ habitsList }) {
  return (
    <div className="text-lg mb-2 border border-black p-1 rounded-md">
      <h1 className="rounded-md font-semibold bg-black text-white text-center py-1">
        Your Streaks
      </h1>
      <div>
        {habitsList.map(el => (
          <StreakCard
            key={el.id}
            habit={el.habit}
            checkedDates={el.checkedDates}
          />
        ))}
      </div>
    </div>
  );
}

export default Streaks;
