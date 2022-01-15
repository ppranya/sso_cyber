import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./user.thunk";

const initialState = {
  value: {
    userList: []
  },
};

const userSlice = createSlice({
  name: "user_list",
  initialState,
  reducers: {
    getUserList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userList.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { getUserList } = userSlice.actions;

export default userSlice.reducer;
