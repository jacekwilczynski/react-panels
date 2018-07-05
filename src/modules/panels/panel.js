import types from './types';

const reducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case types.ADD:
      return payload;
    case types.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
