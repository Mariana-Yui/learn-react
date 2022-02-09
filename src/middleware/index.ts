import moment from 'moment';

export const logger = (store) => (next) => (action) => {
  console.log('==修改前State==', store.getState());
  const result = next(action);
  console.log('==修改后State==', store.getState());
  return result;
};

export const getTime = (store) => (next) => (action) => {
  console.log('==修改前时间==', moment().valueOf());
  const result = next(action);
  console.log('==修改后时间==', moment().valueOf());
  return result;
};
