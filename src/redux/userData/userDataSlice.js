import { createSlice } from '@reduxjs/toolkit';
import { calculateDailyRate } from './userDataOperation';

const initialState = {
  user: null,
  modalOpen: false,
  modalData: [],
  isLoading: false,
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

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    modalOpen(state, action) {
      state.modalOpen = true;
    },
    modalClose(state, action) {
      state.modalOpen = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(calculateDailyRate.pending, pendingHandlerAuth);
    builder.addCase(calculateDailyRate.rejected, rejectedHandler);
    builder.addCase(calculateDailyRate.fulfilled, (state, action) => {
      state.modalData = action.payload;
      state.isLoading = false;
      state.error = '';
    });
  },
});
export const { modalOpen, modalClose } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
