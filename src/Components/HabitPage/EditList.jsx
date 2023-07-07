import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton";
import { deleteHabit } from "../../features/Habits/HabitsSlice";
function EditList() {
  const { habitsList } = useSelector(state => state.habits);
  const dispatch = useDispatch();
  function handleDeleteClick(habitId) {
    dispatch(deleteHabit(habitId));
  }

  return (
    <div className="absolute shadow-2xl border border-black rounded-md right-11 my-1 p-2 text-base bg-white">
      <div className="text-center pb-2">Delete Habits</div>
      <div>
        <ul>
          {habitsList.map(el => (
            <li
              className="flex justify-between items-center border border-black rounded p-2 mb-2"
              key={el.id}
              habitId={el.id}
            >
              <div>{el.habit}</div>
              <div>
                <IconButton onClick={() => handleDeleteClick(el.id)}>
                  <MdDelete className="text-lg" />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EditList;
