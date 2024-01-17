import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk(
//   "usersInf/fetchUsersStatus",
//   async () => {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     return data; // fetch запрос на отображение пользователей
//   }
// );

const initialState = {
  entireListUsers: {},
};

export const usersInfTableSlice = createSlice({
  name: "usersInf",
  initialState: initialState,
  reducers: {
    setEntireListUsers: (state, action) => {
      state.entireListUsers = action.payload; // сюда сохраняем весь список пользователей
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //       state.entireListUsers = action.payload; // фукнция работает с асинхронным экшеном, который получает всех пользователей
  //     });
  //   },
});

export const usersSelector = (state) => state.usersTable;

export const { setEntireListUsers } = usersInfTableSlice.actions;

export default usersInfTableSlice.reducer;
