import panels, { selectors as panelsSelectors } from 'modules/panels';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  panels
});

export default reducer;

export const selectors = {
  getCoinPairs: state => state.coinPairs,
  getPanels: state => state.panels,
  getPanelIds: state => panelsSelectors.getPanelIds(state.panels),
  getPanel: (state, id) => panelsSelectors.getPanel(state.panels, id)
};
