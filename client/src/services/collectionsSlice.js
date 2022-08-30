import { createSlice } from '@reduxjs/toolkit';

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState: {},
  reducers: {
    setCollections: (state, { payload }) => {
      console.log(state);
      state.collections = payload;
    },
    removeCollection: ({ collections }, { payload }) => {
      const index = collections.data.findIndex(({ id }) => id === payload);
      collections.data.splice(index, 1);
    },
  },
});

export const { setCollections, addCollection, removeCollection } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;
