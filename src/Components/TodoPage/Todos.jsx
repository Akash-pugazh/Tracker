import React from "react";
import { FiPlus } from "react-icons/fi";
import TodosList from "./TodosList";
import IconButton from "../IconButton";
import TodosCard from "./TodosCard";
function Todos() {
  return (
    <div className="Todo-Wrapper w-full">
      <div className="border-2 border-black w-full Todo_Wrapper">
        <section className="Top-Wrapper py-2 flex items-center px-1">
          <div className="w-[85%] text-center">
            <h4>Your Todos</h4>
          </div>
          <div className="w-[15%] text-center">
            <IconButton>
              <FiPlus />
            </IconButton>
          </div>
        </section>
        <section className="p-1 Main-Wrapper">
          <TodosList />
        </section>
      </div>
    </div>
  );
}

export default Todos;
