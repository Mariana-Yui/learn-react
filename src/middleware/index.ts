export const logger = (store) => (next) => (action) => {
  console.log('==修改前State==', store.getState());
  const result = next(action);
  console.log('==修改后State==', store.getState());
  return result;
};
