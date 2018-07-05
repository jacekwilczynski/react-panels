const subReducers = {
  MOVE: (state, x, y) => ({
    ...state,
    left: state.left + x,
    top: state.top + y
  }),
  RESIZE_N: (state, x, y) => ({
    ...state,
    top: state.top + y,
    height: state.height - y
  }),
  RESIZE_NE: (state, x, y) => ({
    ...state,
    top: state.top + y,
    width: state.width + x,
    height: state.height - y
  }),
  RESIZE_E: (state, x, y) => ({
    ...state,
    width: state.width + x
  }),
  RESIZE_SE: (state, x, y) => ({
    ...state,
    width: state.width + x,
    height: state.height + y
  }),
  RESIZE_S: (state, x, y) => ({
    ...state,
    height: state.height + y
  }),
  RESIZE_SW: (state, x, y) => ({
    ...state,
    left: state.left + x,
    width: state.width - x,
    height: state.height + y
  }),
  RESIZE_W: (state, x, y) => ({
    ...state,
    left: state.left + x,
    width: state.width - x
  }),
  RESIZE_NW: (state, x, y) => ({
    ...state,
    left: state.left + x,
    top: state.top + y,
    width: state.width - x,
    height: state.height - y
  })
};

export default subReducers;
