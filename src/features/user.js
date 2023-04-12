import { createSlice } from '@reduxjs/toolkit';
const initialStateValue =  { name: '', age: 0, email: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: {value:initialStateValue},
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

	logout: (state) => {
		state.value =  initialStateValue;
	},
},
});

// export actions
// login function
export const { login, logout } = userSlice.actions;

// export reducert
export default userSlice.reducer;
