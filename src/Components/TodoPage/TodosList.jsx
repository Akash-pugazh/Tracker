import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContextProvider";
import TodosCard from "./TodosCard";

function TodosList({ selection }) {
  const { todo } = useContext(TodoContext);
  const selectedTodos = todo[selection];
  return (
    <div className="w-full h-full">
      {selectedTodos.map((data, index) => {
        return (
          <TodosCard
            key={index}
            data={data}
            index={index}
            selection={selection}
          />
        );
      })}
    </div>
  );
}

export default TodosList;
