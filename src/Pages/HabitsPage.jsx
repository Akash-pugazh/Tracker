import React from "react";
import TableComponent from "../Components/HabitPage/TableComponent";

function HabitsPage() {
  const habits = ["Exercise", "Read", "Meditate"];
  return (
    <section className="w-screen h-[90%] px-2 py-1 lg:px-4">
      <div className="w-full bg-black h-[8%] mb-2">
        <h2 className="text-white font-semibold text-center h-full flex items-center justify-center">
          HabitsPage
        </h2>
      </div>
      <TableComponent />
    </section>
  );
}

export default HabitsPage;
