const selectors = {
  getPanelIds: state => Object.keys(state),
  getPanel: (state, id) => state[id]
};

export default selectors;
