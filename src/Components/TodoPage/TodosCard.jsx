import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "../IconButton";
import { MdEdit, MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodo,
  deleteTodo,
  completeTodo,
} from "../../features/Todos/TodosSlice";

function TodosCard({ completed, id, todo }) {
  const dispatch = useDispatch();

  const notifyDeleted = () => toast.error("Todo Deleted");
  const notifyEdited = () => toast.success("Todo Edited");
  const notifyCompleted = () => toast.info("Todo Completed");

  function handleEditClick(id, prevTodo) {
    const newTodo = prompt("Enter the new todo : ", prevTodo);
    if (!newTodo) return;
    dispatch(editTodo(id, newTodo));
    notifyEdited();
  }

  function handleDeleteClick(id) {
    dispatch(deleteTodo(id));
    notifyDeleted();
  }

  function handleCompleteClick(id) {
    dispatch(completeTodo(id));
    notifyCompleted();
  }

  return (
    <section className="w-full Card-Wrapper flex items-center border-2 border-black text-black rounded-lg py-3 mb-5 shadow-[8px_8px_0px_-3px_rgba(0,0,0,1)]">
      <div className="Data-Div flex w-[70%] items-center pl-3 lg:w-[80%]">
        <div className="lg:w-[5%]">
          {!completed && (
            <IconButton onClick={() => handleCompleteClick(id)}>
              <TiTick />
            </IconButton>
          )}
        </div>
        <div className="ml-3 w-[95%] lg:ml-0">{todo}</div>
      </div>
      <div
        className={`Buttons-Div w-[30%] flex ${
          completed ? "justify-end mr-3" : "justify-center"
        } items-center gap-2 text-center lg:justify-end lg:w[20%] lg:pr-2 md:justify-end md:pr-2`}
      >
        {!completed && (
          <IconButton onClick={() => handleEditClick(id, todo)}>
            <MdEdit />
          </IconButton>
        )}
        <IconButton onClick={() => handleDeleteClick(id)}>
          <MdDelete />
        </IconButton>
      </div>
    </section>
  );
}

export default TodosCard;
