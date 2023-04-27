import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const authRegister = createAsyncThunk(
  '/auth/register',
  async (user, thunkApi) => {
    console.log('here', user);
    try {
      const res = await axios.post('/auth/register', user);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const authLogin = createAsyncThunk(
  '/auth/login',
  async (user, thunkApi) => {
    try {
      const res = await axios.post('/auth/login', user);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const response = await axios.post('/auth/logout');
      clearAuthHeader();
      console.log('LOGOUT', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
