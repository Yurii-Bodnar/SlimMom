import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utility/auxiliaryFunctions';

export const searchByQueryProduct = createAsyncThunk(
  '/product',
  async (productValue, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const response = axios.get('/product', { params: productValue });
      console.log('dataSearch===>', response);
      return response;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
