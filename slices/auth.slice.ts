import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: true,
    user: {
      firstname: "Pablo",
      lastname: "Delchoco",
      email: "pablo.delchoco@gmail.com",
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
