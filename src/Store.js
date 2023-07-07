import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/Todos/TodosSlice";
import habitsReducer from "./features/Habits/HabitsSlice";
import userReducer from "./features/Users/UserSlice";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    todos: todosReducer,
    habits: habitsReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("reduxState", JSON.stringify(state));
});

export default store;
