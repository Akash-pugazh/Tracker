import React from "react";
import IconButton from "../IconButton";
import { MdEdit, MdDelete } from "react-icons/md";
function TodosCard() {
  return (
    <section className="w-full h-[4rem] Card-Wrapper flex items-center border-2 border-black text-black rounded-lg mb-2">
      <div className="Data-Div w-[70%] lg:w-[80%]"></div>
      <div className="Buttons-Div w-[30%] flex justify-center items-center gap-2 text-center lg:justify-end lg:w[20%] lg:pr-2 md:justify-end md:pr-2 ">
        <IconButton>
          <MdEdit />
        </IconButton>
        <IconButton>
          <MdDelete />
        </IconButton>
      </div>
    </section>
  );
}

export default TodosCard;
