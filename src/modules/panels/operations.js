import { selectors as rootSelectors } from 'modules/reducer';
import generateUnique from 'utils/functions/generateUnique';
import actions from './actions';

const operations = {
  ...actions,
  addPanel: ({ title, left, top, width, height }) => (
    dispatch,
    getState,
    { generateId }
  ) => {
    const takenIds = rootSelectors.getPanelIds(getState());
    const id = generateUnique(generateId)(takenIds);
    dispatch(actions.addPanel({ id, title, left, top, width, height }));
  }
};

export default operations;
