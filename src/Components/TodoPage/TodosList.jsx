import React from "react";
import TodosCard from "./TodosCard";

function TodosList({ todosList }) {
  return (
    <div className="w-full h-full">
      {todosList &&
        todosList.map(data => {
          return (
            <React.Fragment key={data.id}>
              <TodosCard
                completed={data.completed}
                id={data.id}
                todo={data.todo}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default TodosList;
