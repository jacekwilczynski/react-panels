import configureStore from 'configureStore';
import { operations as panelsOperations } from 'modules/panels';
import App from 'pages/AppConnected';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import registerServiceWorker from 'utils/registerServiceWorker';
import { v4 as uuid_v4 } from 'uuid';

const store = configureStore({
  middlewares: [createLogger()],
  dependencyMap: { generateId: uuid_v4 }
});

store.dispatch(
  panelsOperations.addPanel({
    title: 'Wonderful Panel',
    left: 100,
    top: 300,
    width: 700,
    height: 100
  })
);

store.dispatch(
  panelsOperations.addPanel({
    title: 'Another Panel!',
    left: 300,
    top: 500,
    width: 200,
    height: 200
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
