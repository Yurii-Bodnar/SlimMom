import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authRegister, logOutUser } from './authOperation';

const initialState = {
  user: {
    email: '',
    password: '',
    userName: '',
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
  extraReducers: builder => {
    builder.addCase(authRegister.pending, pendingHandlerAuth);
    builder.addCase(authRegister.rejected, rejectedHandler);
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      console.log(action.payload);
      // const { email, password, username, id } = action.payload;
      state.user = {
        ...state.user,
        email: action.payload.email,
        password: action.payload.password,
        userName: action.payload.username,
        id: action.payload.id,
      };
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(authLogin.pending, pendingHandlerAuth);
    builder.addCase(authLogin.rejected, rejectedHandler);
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        email: action.payload.user.email,
        password: action.payload.user.password,
        userName: action.payload.user.username,
        id: action.payload.user.id,
      };
      state.token = action.payload.accessToken;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(logOutUser.pending, pendingHandlerAuth);
    builder.addCase(logOutUser.rejected, rejectedHandler);
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.user = {
        email: '',
        password: '',
        userName: '',
        id: null,
      };
      state.isLoading = false;
      state.token = null;
      state.error = '';
    });
  },
});

// Action creators are generated for each case reducer function
export const authReducer = authSlice.reducer;
