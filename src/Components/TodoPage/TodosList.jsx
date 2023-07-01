import React from "react";
import TodosCard from "./TodosCard";

function TodosList() {
  return (
    <div className="w-full h-full">
      {[].map(() => {
        return <TodosCard />;
      })}
    </div>
  );
}

export default TodosList;
