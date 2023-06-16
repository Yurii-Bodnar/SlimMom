import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  calculateDailyRate,
  calculateDailyRateForSignUser,
  deleteProduct,
  getCurrentUser,
  getInfoDay,
} from './userDataOperation';

const initialState = {
  user: null,
  data: null,
  userSummary: null,
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
    setDataCalendar(state, action) {
      // console.log(action.payload);
      state.data = action.payload;
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
    builder.addCase(calculateDailyRateForSignUser.pending, pendingHandlerAuth);
    builder.addCase(calculateDailyRateForSignUser.rejected, rejectedHandler);
    builder.addCase(
      calculateDailyRateForSignUser.fulfilled,
      (state, action) => {
        state.user.userData.dailyRate = action.payload.dailyRate;
        state.isLoading = false;
        state.error = '';
      }
    );
    builder.addCase(getCurrentUser.pending, pendingHandlerAuth);
    builder.addCase(getCurrentUser.rejected, rejectedHandler);
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(getInfoDay.pending, pendingHandlerAuth);
    builder.addCase(getInfoDay.rejected, rejectedHandler);
    builder.addCase(getInfoDay.fulfilled, (state, action) => {
      state.userSummary = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(addProduct.pending, pendingHandlerAuth);
    builder.addCase(addProduct.rejected, rejectedHandler);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.userSummary = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(deleteProduct.pending, pendingHandlerAuth);
    builder.addCase(deleteProduct.rejected, rejectedHandler);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.userSummary.daySummary = action.payload;
    });
  },
});
export const { modalOpen, modalClose, setDataCalendar } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;
