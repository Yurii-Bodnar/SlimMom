import axios from 'axios';

export const correctData = str => {
  const data = new Date(str).getDate();
  const month = new Date(str).getMonth() + 1;
  const year = new Date(str).getFullYear();
  return (
    (data < 10 ? '0' + data.toString() + '.' : data.toString() + '.') +
    (month < 10 ? '0' + month.toString() : month.toString()) +
    '.' +
    year.toString()
  );
};
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const dateToRequest = dateReq => {
  const data = new Date(dateReq).getDate();
  const month = new Date(dateReq).getMonth() + 1;
  const year = new Date(dateReq).getFullYear();
  console.log(data);
  return (
    year.toString() +
    '-' +
    (month < 10 ? '0' + month.toString() + '-' : month.toString() + '-') +
    (data < 10 ? '0' + data.toString() : data.toString())
  );
};
export const correctDataForSummary = str => {
  const data = new Date(str).getDate();
  const month = new Date(str).getMonth() + 1;
  const year = new Date(str).getFullYear();
  return (
    (data < 10 ? '0' + data.toString() + '/' : data.toString() + '/') +
    (month < 10 ? '0' + month.toString() : month.toString()) +
    '/' +
    year.toString()
  );
};
export const replaceForSummary = str => str.replaceAll('.', '/');
export const correctDateForAddOperation = date =>
  date.split('.').reverse().join('-');
