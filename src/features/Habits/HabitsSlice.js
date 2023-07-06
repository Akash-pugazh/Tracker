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
    unCheckHabit: {
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
            const removeIndex = el.checkedDates.indexOf(action.payload.date);
            if (removeIndex > -1) el.checkedDates.splice(removeIndex, 1);
          }
        });
      },
    },
  },
});

export const { addHabit, checkHabit, unCheckHabit } = HabitsSlice.actions;
export default HabitsSlice.reducer;
