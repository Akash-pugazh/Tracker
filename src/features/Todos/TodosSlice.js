import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare: (todo, timeRange, createdAt) => {
        return {
          payload: {
            id: nanoid(),
            todo,
            timeRange,
            createdAt,
            completed: false,
          },
        };
      },
      reducer: (state, action) => {
        state.todosList.push(action.payload);
      },
    },
    editTodo: {
      prepare: (id, newTodo) => {
        return {
          payload: { id, newTodo },
        };
      },
      reducer: (state, action) => {
        state.todosList.filter(element => {
          if (element.id === action.payload.id)
            element.todo = action.payload.newTodo;
        });
      },
    },
    deleteTodo: {
      reducer: (state, action) => {
        const indexToDelete = state.todosList.findIndex(
          element => element.id === action.payload
        );
        if (indexToDelete !== -1) state.todosList.splice(indexToDelete, 1);
      },
    },
    completeTodo: {
      reducer: (state, action) => {
        state.todosList.filter(element => {
          if (element.id === action.payload) element["completed"] = true;
        });
      },
    },
  },
});

export const { addTodo, editTodo, deleteTodo, completeTodo } =
  TodosSlice.actions;

export default TodosSlice.reducer;
