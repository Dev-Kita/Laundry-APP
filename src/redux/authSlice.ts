import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

// status : idle | loading | succeeded | failed
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
      state.id = action.payload?.id;
      state.token = action.payload?.token;
      state.username = action.payload?.username;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(checkAuth.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.id = action.payload?.id;
      state.token = action.payload?.token;
      state.username = action.payload?.username;
    });

    builder.addCase(checkAuth.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {login} = authSlice.actions;

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  try {
    const auth = await AsyncStorage.getItem('auth');
    if (auth != null) {
      const data = await JSON.parse(auth);
      return data;
    } else {
      const data = null;
      return data;
    }
  } catch (e) {
    console.error(e);
  }
});

export default authSlice.reducer;
