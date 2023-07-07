import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateDetails: {
      prepare: (name, email) => {
        return {
          payload: {
            name,
            email,
          },
        };
      },
      reducer: (state, action) => {
        state.fullName = action.payload.name;
        state.email = action.payload.email;
        state.loggedIn = true;
      },
    },
  },
});

export const { updateDetails } = userSlice.actions;
export default userSlice.reducer;
