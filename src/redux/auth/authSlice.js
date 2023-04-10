import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    password: '',
    userName: 'Name',
    id: null,
  },
  isLoading: false,
  token: null,
  error: '',
};

const pendingHandlerAuth = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const authReducer = authSlice.reducer;
