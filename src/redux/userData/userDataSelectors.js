export const selectOpenModal = state => state.userData.modalOpen;
export const selectModalDataDailyRate = state =>
  state.userData.modalData.dailyRate;
export const selectModalDataNotAllowedProducts = state =>
  state.userData.modalData.notAllowedProducts;
export const selectDailyRateForFist = state =>
  state.userData.user?.userData.dailyRate;
export const selectNotAllowedProducts = state =>
  state.userData.user?.userData.notAllowedProducts;
export const selectDataCalendar = state => state.userData.data;
export const selectKcalLeft = state => state.userData.userSummary?.kcalLeft;
export const selectConsumed = state => state.userData.userSummary?.kcalConsumed;
export const selectDailyRate = state => state.userData.userSummary?.dailyRate;
export const selectPercent = state =>
  state.userData.userSummary?.percentsOfDailyRate;
export const selectEatenProducts = state =>
  state.userData.userSummary?.eatenProducts;
export const selectEatenProductsAfterAddOperation = state =>
  state.userData.userSummary?.day?.eatenProducts;
