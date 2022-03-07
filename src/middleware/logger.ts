const logger = (store) => (next) => (action) => {
  console.log('%c prev state', 'color: pink', store.getState());
  next(action);
  console.log('%c next state', 'color: #0f0', store.getState());
};

export default logger;
