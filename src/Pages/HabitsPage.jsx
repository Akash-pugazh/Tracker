import React, { useState } from "react";
import TableComponent from "../Components/HabitPage/TableComponent";
import EditList from "../Components/HabitPage/EditList";
import Streaks from "../Components/HabitPage/Streaks";
import IconButton from "../Components/IconButton";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addHabit } from "../features/Habits/HabitsSlice";

function HabitsPage() {
  const [showEditList, setShowEditList] = useState(false);
  const { habitsList } = useSelector(state => state.habits);

  const dispatch = useDispatch();
  function handleAddHabit() {
    const habitInput = prompt("Enter the Habit :");
    if (!habitInput) return;
    if (habitsList.length === 0) setShowEditList(!showEditList);
    dispatch(addHabit(habitInput));
  }

  function handleEditClick() {
    setShowEditList(!showEditList);
  }

  return (
    <section className="w-screen px-2 py-1 lg:px-4">
      <div className="w-full py-3 bg-black mb-2">
        <h2 className="text-white font-semibold text-center h-full flex items-center justify-center">
          HabitsPage
        </h2>
      </div>
      <Streaks habitsList={habitsList} />
      <div className=" w-full mb-2 py-2 flex items-center text-base relative">
        <span className=" inline-block w-1/2 pl-1">Add a habit :</span>
        <span className=" inline-block text-end text-xl lg:text-2xl w-1/2">
          {habitsList.length !== 0 && (
            <IconButton
              onClick={() => handleEditClick()}
              style={{ marginRight: "0.5rem" }}
            >
              <MdEdit />
            </IconButton>
          )}
          {habitsList.length !== 0 && showEditList && <EditList />}

          <IconButton onClick={() => handleAddHabit()}>
            <FiPlus />
          </IconButton>
        </span>
      </div>
      <div className="w-full mb-2">
        <TableComponent habitsList={habitsList} />
      </div>
    </section>
  );
}

export default HabitsPage;
