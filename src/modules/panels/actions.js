import types from './types';

const actions = {
  addPanel: ({ id, title, left, top, width, height }) => ({
    type: types.ADD,
    payload: { id, title, left, top, width, height }
  }),
  removePanel: ({ id }) => ({
    type: types.REMOVE,
    payload: { id }
  }),
  updatePanel: ({ id, title, left, top, width, height }) => ({
    type: types.UPDATE,
    payload: { id, title, left, top, width, height }
  })
};

export default actions;
