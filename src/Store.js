import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/Todos/TodosSlice";
import habitsReducer from "./features/Habits/HabitsSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    habits: habitsReducer,
  },
});

export default store;
