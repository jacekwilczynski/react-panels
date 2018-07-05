import panel from './panel';
import types from './types';

const reducer = (state = {}, action) => {
  const payload = action.payload;
  const id = payload && payload.id;
  switch (action.type) {
    case types.ADD:
    case types.UPDATE:
      return { ...state, [id]: panel(state[id], action) };
    case types.REMOVE:
      return { ...state, [id]: undefined };
    default:
      return state;
  }
};

export default reducer;
