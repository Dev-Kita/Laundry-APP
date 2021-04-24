import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  username: '',
  token: '',
  id: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLoading = false;
    },
    authCheck: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
  },
});

export const {login, authCheck} = authSlice.actions;
export default authSlice.reducer;
