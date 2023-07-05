import React from "react";

function StreakCard({ habit, streakCount }) {
  return (
    <div className="Card-Wrapper w-16 h-16 lg:w-20 lg:h-20 rounded-[50%] text-black flex flex-col justify-center items-center mb-2 text-base border-2 border-black">
      <div className="max-w-[3rem] max-h-[4rem] overflow-hidden">{habit}</div>
      <div>{streakCount}</div>
    </div>
  );
}

export default StreakCard;
