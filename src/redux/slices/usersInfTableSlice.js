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
  entireListUsers: [],
  filterUsers: [],
  searchTermAllCharacteristic: {},
  sortAge: "",
  modalInfUser: false,
  activeModalInfUser: {},
};

export const usersInfTableSlice = createSlice({
  name: "usersInf",
  initialState: initialState,
  reducers: {
    setEntireListUsers: (state, action) => {
      state.entireListUsers = action.payload; // сюда сохраняем весь список пользователей
    },
    setFilterUsers: (state, action) => {
      state.filterUsers = action.payload; // сюда сохраняем весь список отфильтрованных пользователей
    },
    setSearchTermAllCharacteristic: (state, action) => {
      state.searchTermAllCharacteristic = action.payload; // сюда сохраняем информацию с поиском пользователя
    },
    setSortAge: (state, action) => {
      state.sortAge = action.payload; // сюда сохраняем информацию с поиском пользователя
    },
    setModalInfUser: (state, action) => {
      state.modalInfUser = action.payload; // сюда сохраняем информацию с поиском пользователя
    },
    setActiveModalInfUser: (state, action) => {
      state.activeModalInfUser = action.payload; // сюда сохраняем информацию с поиском пользователя
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //       state.entireListUsers = action.payload; // фукнция работает с асинхронным экшеном, который получает всех пользователей
  //     });
  //   },
});

export const usersSelector = (state) => state.usersTable;

export const {
  setEntireListUsers,
  setFilterUsers,
  setSearchTermAllCharacteristic,
  setSortAge,
  setModalInfUser,
  setActiveModalInfUser,
} = usersInfTableSlice.actions;

export default usersInfTableSlice.reducer;
