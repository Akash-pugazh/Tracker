import React, { useState } from "react";

import Todos from "../Components/TodoPage/Todos";
import Button from "../Components/Button";
function TodosPage() {
  const [selection, setSelection] = useState("Today");

  return (
    <section className="w-screen h-[90%] px-3 py-1 text-center">
      {/* //^  Top Portion for selection */}
      <div className="h-[15%] border-2 border-black select-none">
        <h1 className="h-1/2 bg-black text-white text-center grid place-items-center">
          TodosPage
        </h1>
        <div className="h-1/2">
          <button
            className={`${
              selection === "Today" && "bg-black text-white"
            } w-1/3 h-full`}
            onClick={() => setSelection("Today")}
          >
            Today
          </button>
          <button
            className={`${
              selection === "Weekly" && "bg-black text-white"
            } w-1/3 h-full`}
            onClick={() => setSelection("Weekly")}
          >
            Weekly
          </button>
          <button
            className={`${
              selection === "Monthly" && "bg-black text-white"
            } w-1/3 h-full`}
            onClick={() => setSelection("Monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* //^  Search Todos */}
      <div className="h-[10%] py-3 w-full flex justify-between">
        <input
          className="h-full w-[70%] border-b-2 border-black focus:outline-none text-2xl"
          type="text"
        />
        <Button value="Search" />
      </div>
      {/* //^ Todo Component */}
      <div className="Todos-Component h-[75%]">
        <Todos selection={selection} />
      </div>
    </section>
  );
}

export default TodosPage;
