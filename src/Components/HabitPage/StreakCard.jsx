import React from "react";
import { sortDates, calculateStreakCount } from "../../Utils/StreakCounter";

function StreakCard({ habit, checkedDates, streakCount }) {
  const formattedCheckedDates = sortDates(checkedDates);
  console.log(formattedCheckedDates);
  const streak = calculateStreakCount(formattedCheckedDates);
  console.log(streak);
  return (
    <div className="Card-Wrapper w-16 h-16 lg:w-20 lg:h-20 rounded-[50%] text-black flex flex-col justify-center items-center mb-2 text-base border-2 border-black">
      <div className="max-w-[3rem] max-h-[4rem] overflow-hidden">{habit}</div>
      <div>{streak}</div>
    </div>
  );
}

export default StreakCard;
