import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { LIGHT_THEME, STORAGE_KEY_THEME } from '../config/constants';

const initialState = {
  theme: getLocalStorageItem(STORAGE_KEY_THEME) || LIGHT_THEME,
};

export const themeSlice = createSlice({
  name: 'themeToggler',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
