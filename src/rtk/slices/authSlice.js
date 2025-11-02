import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  user: JSON.stringify(localStorage.getItem("user")),
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    registerSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setError,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  clearError,
} = authSlice.actions;
export default authSlice.reducer;
