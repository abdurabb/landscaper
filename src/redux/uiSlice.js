import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    navbarOpen: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.navbarOpen = !state.navbarOpen;
    },
    closeNavbar: (state) => {
      state.navbarOpen = false;
    },
  },
});

export const { toggleNavbar, closeNavbar } = uiSlice.actions;
export default uiSlice.reducer;
