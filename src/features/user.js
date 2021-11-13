import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value = [{ ...action.payload }];
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
