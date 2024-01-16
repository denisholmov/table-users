import { configureStore } from "@reduxjs/toolkit";
import usersInfTableSlice from "./slices/usersInfTableSlice";

export const store = configureStore({
  reducer: { usersTable: usersInfTableSlice },
});
