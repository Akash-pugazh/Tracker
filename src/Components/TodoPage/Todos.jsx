import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TodoContext } from "../../Context/TodoContextProvider";
import TodosList from "./TodosList";
import IconButton from "../IconButton";

function Todos({ selection }) {
  const { todo, setTodo } = useContext(TodoContext);

  function getTodoSuffix(selection) {
    if (selection === "Today") {
      return "today";
    } else if (selection === "Weekly") {
      return "by end of this week";
    } else {
      return "by end of this month";
    }
  }

  function getTodo(todo, selection) {
    const suffix = getTodoSuffix(selection);
    const inputTodo = prompt(`Hey there🫡, What you want todo ${suffix}`);
    if (inputTodo === null || inputTodo.length === 0) return;
    
    switch (selection) {
      case "Today":
        setTodo({
          ...todo,
          Today: [...todo["Today"], inputTodo],
        });
        break;
      case "Weekly":
        setTodo({
          ...todo,
          Weekly: [...todo["Weekly"], inputTodo],
        });
        break;
      case "Monthly":
        setTodo({
          ...todo,
          Monthly: [...todo["Monthly"], inputTodo],
        });
        break;
      default:
        break;
    }
  }

  console.log(todo);

  return (
    <div className="Todo-Wrapper w-full h-full">
      <div className="border-2 border-black w-full h-full Todo_Wrapper">
        <section className="h-[15%] Top-Wrapper flex items-center py-2 px-1">
          <div className="w-[85%] text-center">
            <h4>Your {selection} Todos</h4>
          </div>
          <div className="w-[15%] text-center">
            <IconButton onClick={() => getTodo(todo, selection)}>
              <FiPlus />
            </IconButton>
          </div>
        </section>
        <section className="h-[85%] pt-4 pb-2 px-1 Main-Wrapper">
          <TodosList selection={selection} />
        </section>
      </div>
    </div>
  );
}

export default Todos;
