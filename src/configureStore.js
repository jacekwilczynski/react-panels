import reducer from 'modules/reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const configureStore = ({ middlewares, dependencyMap }) =>
  createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(dependencyMap), ...middlewares)
    )
  );

export default configureStore;
