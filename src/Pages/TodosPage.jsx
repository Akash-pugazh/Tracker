import React from "react";
import Todos from "../Components/TodoPage/Todos";
import Button from "../Components/Button";
function TodosPage() {
  return (
    <section className="w-screen h-[90%] px-2 py-1 text-center lg:px-4">
      <div className="h-[15%] border-2 border-black select-none lg:h-[12%]">
        <h1 className="h-1/2 bg-black text-white text-center grid place-items-center">
          TodosPage
        </h1>
        <div className="h-1/2">
          <button className="w-1/3 h-full">Today</button>
          <button className="w-1/3 h-full">Weekly</button>
          <button className="w-1/3 h-full">Monthly</button>
        </div>
      </div>

      <div className="h-[10%] py-3 w-full flex justify-between lg:w-1/2 lg:m-auto lg:h-[8%]">
        <input
          className="h-full w-[70%] border-b-2 border-black focus:outline-none text-2xl"
          type="text"
        />
        <Button value="Search" />
      </div>

      <div className="Todos-Component h-[75%] lg:h-[80%]">
        <Todos />
      </div>
    </section>
  );
}

export default TodosPage;
