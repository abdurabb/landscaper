import { createSlice } from "@reduxjs/toolkit";

const savedLanguage = localStorage.getItem("language") || "en";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: savedLanguage },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("language", action.payload); 
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
