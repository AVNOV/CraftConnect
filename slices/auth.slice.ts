import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    user: {
      id: -1,
      firstname: "",
      lastname: "",
      email: "",
      artisan: null,
      city: "",
      phone_number: "",
      role: "",
      created_at: "",
      updated_at: "",
    },
    access_token: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = {
        id: -1,
        firstname: "",
        lastname: "",
        email: "",
        artisan: null,
        city: "",
        phone_number: "",
        role: "",
        created_at: "",
        updated_at: "",
      };
      state.access_token = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
