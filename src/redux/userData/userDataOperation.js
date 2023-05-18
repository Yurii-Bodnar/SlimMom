import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const calculateDailyRate = createAsyncThunk(
  '/daily-rate',
  async (data, thunkApi) => {
    try {
      const res = await axios.post('/daily-rate', data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
