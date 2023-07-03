import React from "react";
import IconButton from "../IconButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../../features/Todos/TodosSlice";

function TodosCard({ id, todo }) {
  const dispatch = useDispatch();
  const todoState = useSelector(state => state.todos);

  function handleEditClick(id, prevTodo) {
    const newTodo = prompt("Enter the new todo : ", prevTodo);
    if (!newTodo) return;
    dispatch(editTodo(id, newTodo));
  }

  function handleDeleteClick(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <section className="w-full h-[4rem] Card-Wrapper flex items-center border-2 border-black text-black rounded-lg mb-2">
      <div className="Data-Div w-[70%] pl-5 lg:w-[80%]">{todo}</div>
      <div className="Buttons-Div w-[30%] flex justify-center items-center gap-2 text-center lg:justify-end lg:w[20%] lg:pr-2 md:justify-end md:pr-2 ">
        <IconButton onClick={() => handleEditClick(id, todo)}>
          <MdEdit />
        </IconButton>
        <IconButton onClick={() => handleDeleteClick(id)}>
          <MdDelete />
        </IconButton>
      </div>
    </section>
  );
}

export default TodosCard;
