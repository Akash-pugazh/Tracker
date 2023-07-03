import React, { useEffect, useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import IconButton from "../Components/IconButton";
import TodosList from "../Components/TodoPage/TodosList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/Todos/TodosSlice";
import moment from "moment/moment";

function TodosPage() {
  const [timeRange, setTimeRange] = useState("today");
  const dispatch = useDispatch();
  const { todosList } = useSelector(state => state.todos);
  function handleAddTodo(timeRange, createdAt) {
    const todoInput = prompt("Enter the task : ");
    if (!todoInput) return;
    dispatch(addTodo(todoInput, timeRange, createdAt));
  }
  // const expiryDate = moment("03/07/2023", "DD/MM/YYYY")
  //   .add(7, "days")
  //   .format("DD/MM/YYYY")
  //   .substring(0,2)
  // console.log(expiryDate);
  const currentDate = moment().format("DD/MM/YYYY");
  const currentDateValue = +currentDate.substring(0, 2);
  const timeRangeFilteredTodos = todosList.filter(el => {
    if (timeRange === "today") {
      return el.timeRange === timeRange && el.createdAt === currentDate;
    } else if (timeRange === "weekly") {
      const expiryDate = +moment(el.createdAt, "DD/MM/YYYY")
        .add(7, "days")
        .format("DD/MM/YYYY")
        .substring(0, 2);
      return el.timeRange === timeRange && currentDateValue < expiryDate;
    }
    // Todo : Month expire 
  });

  return (
    <section className="w-screen h-[90%] px-2 py-1 overflow-x-hidden lg:px-4">
      <div className="h-[15%] w-full border-2 border-black select-none font-semibold lg:h-[15%] md:h-[15%]">
        <h1 className="h-1/2 bg-black text-white text-center grid place-items-center">
          TodosPage
        </h1>
        <div className="h-1/2">
          <button
            className={`w-1/3 h-full ${
              timeRange === "today" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("today")}
          >
            Today
          </button>
          <button
            className={`w-1/3 h-full ${
              timeRange === "weekly" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("weekly")}
          >
            Weekly
          </button>
          <button
            className={`w-1/3 h-full ${
              timeRange === "monthly" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="Top-Wrapper h-[10%] py-2 flex items-center px-1">
        <div className="w-[85%] text-center">
          <h4>Your Todos</h4>
        </div>
        <div className="w-[15%] text-center">
          <IconButton
            onClick={() =>
              handleAddTodo(timeRange, moment().format("DD/MM/YYYY"))
            }
          >
            <FiPlus />
          </IconButton>
        </div>
      </div>

      <div className="p-1 Main-Wrapper">
        <TodosList todosList={timeRangeFilteredTodos} />
      </div>
    </section>
  );
}

export default TodosPage;
