import React, { Children, useContext } from "react";
import { TodoContext } from "../../Context/TodoContextProvider";
import IconButton from "../IconButton";
import { MdEdit, MdDelete } from "react-icons/md";
function TodosCard({ data, index, selection }) {
  const { todo, setTodo } = useContext(TodoContext);

  function handleEdit(index, selection) {}

  function handleDelete(deleteIndex, date) {
    const filteredTodos = todo[date].filter((data, index) => {
      return index !== deleteIndex && data;
    });
    setTodo([todo[date] = [...filteredTodos]]);
  }

  return (
    <section className="w-full h-[15%] Card-Wrapper flex items-center border-2 border-black text-black rounded-lg">
      <div className="Data-Div w-[75%]">{data}</div>
      <div className="Buttons-Div w-[25%] text-center">
        <IconButton
          className="mr-1"
          onClick={() => handleEdit(index, selection)}
        >
          <MdEdit />
        </IconButton>
        <IconButton
          className="mr-1"
          onClick={() => handleDelete(index, selection)}
        >
          <MdDelete />
        </IconButton>
      </div>
    </section>
  );
}

export default TodosCard;
