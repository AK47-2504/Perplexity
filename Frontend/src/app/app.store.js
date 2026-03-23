import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/services/auth.slice";
// import karte waqt jho feature ka slice banaya hai uske aage reducer word add karke import karna

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// 1) Store create kiya and Store ko application ke around wrap karna hota hai jisse ki vo pure application ko store ka access mil sake
