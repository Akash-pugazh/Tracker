import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  habitsList: [],
};

const HabitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: {
      prepare: habitInput => {
        return {
          payload: {
            id: nanoid(),
            habit: habitInput,
            checkedDates: [],
            streakCount: 0,
          },
        };
      },
      reducer: (state, action) => {
        state.habitsList.push(action.payload);
      },
    },
    checkHabit: {
      prepare: (habitId, date) => {
        return {
          payload: {
            habitId,
            date,
          },
        };
      },
      reducer: (state, action) => {
        state.habitsList.filter(el => {
          if (el.id === action.payload.habitId) {
            el.checkedDates.push(action.payload.date);
          }
        });
      },
    },
  },
});

export const { addHabit, checkHabit } = HabitsSlice.actions;
export default HabitsSlice.reducer;
