import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice.js";
import uiReducer from "./uiSlice";

 const store = configureStore({
  reducer: {
    ui: uiReducer, 
    language: languageReducer,
  },
});


export default store;