import React from "react";
import { FiPlus } from "react-icons/fi";
import TodosList from "./TodosList";
import IconButton from "../IconButton";

function Todos() {
  return (
    <div className="Todo-Wrapper w-full h-full">
      <div className="border-2 border-black w-full h-full Todo_Wrapper">
        <section className="h-[15%] Top-Wrapper flex items-center px-1">
          <div className="w-[85%] text-center">
            <h4>Your Todos</h4>
          </div>
          <div className="w-[15%] text-center">
            <IconButton>
              <FiPlus />
            </IconButton>
          </div>
        </section>
        <section className="h-[85%] pt-4 pb-2 px-1 Main-Wrapper">
          <TodosList />
        </section>
      </div>
    </div>
  );
}

export default Todos;
