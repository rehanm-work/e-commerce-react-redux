import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value = [{ ...action.payload }];
      console.log(state.value);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
