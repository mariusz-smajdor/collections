import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import collectionsReducer from './collectionsSlice';

export const store = configureStore({
  reducer: {
    themeToggler: themeReducer,
    collections: collectionsReducer,
  },
});
