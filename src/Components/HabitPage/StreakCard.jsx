import React from "react";
import { sortDates, calculateStreakCount } from "../../Utils/StreakCounter";

function StreakCard({ habit, checkedDates }) {
  const formattedCheckedDates = sortDates(checkedDates);
  const streak = calculateStreakCount(formattedCheckedDates);
  return (
    <div
      onClick={{}}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
      }}
      className="Card-Wrapper text-lg cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300 flex justify-between items-center p-3 m-2"
    >
      <div>{habit}</div>
      <div className="bg-black text-white px-2 py-1 rounded">{streak}</div>
    </div>
  );
}

export default StreakCard;
