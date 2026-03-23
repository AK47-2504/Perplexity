import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,  
    error: null,
  },
  reducers: {
    // setUser, setLoading, setError are actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Actions and reducer ko export karna hota
export const { setUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
