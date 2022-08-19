import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '../shared/utils/getLocalStorageItem';
import { localStorageKeys } from '../shared/constants/localStorageKeys';
import { themeKeys } from '../shared/constants/themeKeys';

const { THEME } = localStorageKeys;
const { LIGHT } = themeKeys;

const initialState = {
  theme: getLocalStorageItem(THEME) || LIGHT,
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
