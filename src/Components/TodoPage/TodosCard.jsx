import React from "react";
import IconButton from "../IconButton";
import { MdEdit, MdDelete } from "react-icons/md";
function TodosCard() {
  return (
    <section className="w-full h-[15%] Card-Wrapper flex items-center border-2 border-black text-black rounded-lg">
      <div className="Data-Div w-[70%]">{data}</div>
      <div className="Buttons-Div w-[30%] text-center">
        <IconButton className="mr-1">
          <MdEdit />
        </IconButton>
        <IconButton className="mr-1">
          <MdDelete />
        </IconButton>
      </div>
    </section>
  );
}

export default TodosCard;
