import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment/moment";
import { FiPlus } from "react-icons/fi";
import IconButton from "../Components/IconButton";
import TodosList from "../Components/TodoPage/TodosList";
import Count from "../Components/TodoPage/Count";
import { addTodo } from "../features/Todos/TodosSlice";

const currentDate = moment().format("DD/MM/YYYY");
const timeObject = {
  currentDateValue: +currentDate.substring(0, 2),
  currentMonthValue: +currentDate.substring(3, 5),
};

function TodosPage() {
  const [timeRange, setTimeRange] = useState("today");
  const { currentDateValue, currentMonthValue } = timeObject;
  const dispatch = useDispatch();
  const { todosList } = useSelector(state => state.todos);

  // ^ Toasts

  const notifyCreated = () => toast.success("Todo Created");

  const timeRangeFilteredTodos = todosList.filter(el => {
    if (timeRange === "today") {
      return (
        el.timeRange === timeRange &&
        el.completed === false &&
        el.createdAt === currentDate
      );
    } else if (timeRange === "weekly") {
      const expiryDate = +moment(el.createdAt, "DD/MM/YYYY")
        .add(7, "days")
        .format("DD/MM/YYYY")
        .substring(0, 2);
      return (
        el.timeRange === timeRange &&
        el.completed === false &&
        currentDateValue < expiryDate
      );
    } else if (timeRange === "monthly") {
      const expiryMonth = +moment(el.createdAt, "DD/MM/YYYY")
        .add(1, "month")
        .format("DD/MM/YYYY")
        .substring(3, 5);
      return (
        el.timeRange === timeRange &&
        el.completed === false &&
        currentMonthValue < expiryMonth
      );
    } else {
      return el.completed === true;
    }
  });

  // ^ Compute Complete or Incomplete Counts

  const todayTodos = todosList.filter(el => el.timeRange === "today");
  const weeklyTodos = todosList.filter(el => el.timeRange === "weekly");
  const monthlyTodos = todosList.filter(el => el.timeRange === "monthly");

  const todoStatusCounts = {
    todayCompleted: todayTodos.filter(el => el.completed === true).length,
    todayIncomplete: todayTodos.filter(el => el.completed === false).length,
    weeklyCompleted: weeklyTodos.filter(el => el.completed === true).length,
    weeklyIncomplete: weeklyTodos.filter(el => el.completed === false).length,
    monthlyCompleted: monthlyTodos.filter(el => el.completed === true).length,
    monthlyIncomplete: monthlyTodos.filter(el => el.completed === false).length,
  };

  const {
    todayCompleted,
    todayIncomplete,
    weeklyCompleted,
    weeklyIncomplete,
    monthlyCompleted,
    monthlyIncomplete,
  } = todoStatusCounts;

  const title = `${
    timeRange.substring(0, 1).toUpperCase() +
    timeRange.substring(1, timeRange.length)
  } Tasks`;

  function handleAddTodo(timeRange, createdAt) {
    const todoInput = prompt("Enter the task : ");
    if (!todoInput) return;
    dispatch(addTodo(todoInput, timeRange, createdAt));
    notifyCreated();
  }

  return (
    <section className="w-screen h-[90%] px-2 py-1 overflow-x-hidden lg:px-4">
      <div className="h-[15%] w-full border-2 border-black select-none font-semibold lg:h-[15%] md:h-[15%]">
        <h1 className="h-1/2 bg-black text-white text-center grid place-items-center">
          TodosPage
        </h1>
        <div className="h-1/2">
          <button
            className={`w-1/3 text-base  h-full ${
              timeRange === "today" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("today")}
          >
            <span className="mr-1">Today</span>
            <Count completed={todayCompleted} incomplete={todayIncomplete} />
          </button>
          <button
            className={`w-1/3 text-base  h-full ${
              timeRange === "weekly" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("weekly")}
          >
            <span className="mr-1">Weekly</span>
            <Count completed={weeklyCompleted} incomplete={weeklyIncomplete} />
          </button>
          <button
            className={`w-1/3 text-base  h-full ${
              timeRange === "monthly" ? "bg-black text-white" : ""
            }`}
            onClick={() => setTimeRange("monthly")}
          >
            <span className="mr-1">Monthly</span>
            <Count
              completed={monthlyCompleted}
              incomplete={monthlyIncomplete}
            />
          </button>
        </div>
      </div>

      <div className="Top-Wrapper w-full h-[10%] py-2 flex items-center px-1 lg:justify-between">
        <div className=" w-full text-center">
          <h4>{title}</h4>
        </div>
        {timeRange !== "completed" && (
          <div className="w-max text-center flex lg:text-2xl">
            <IconButton
              onClick={() =>
                handleAddTodo(timeRange, moment().format("DD/MM/YYYY"))
              }
            >
              <FiPlus />
            </IconButton>

            <button
              onClick={() => setTimeRange("completed")}
              className="text-sm rounded-md ml-2 p-2 border-black bg-black text-white lg:text-lg"
            >
              Completed
            </button>
          </div>
        )}
      </div>

      <div className="p-1 Main-Wrapper">
        <TodosList todosList={timeRangeFilteredTodos} />
      </div>

      <ToastContainer
        style={{ width: "15rem", textAlign: "center" }}
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </section>
  );
}

export default TodosPage;
