import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/redux/user.slice";

export default configureStore({
  reducer: {
    user_list: userSlice
  },
});
