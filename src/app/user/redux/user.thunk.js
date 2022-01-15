import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserList } from "./user.service";

// First, create the thunk
const userList = createAsyncThunk("user_list", async (request, thunkAPI) => {
  return getUserList().then((res) => {
    return res;
  });
});

export { userList };
