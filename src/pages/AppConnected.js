import { selectors } from 'modules/reducer';
import App from 'pages/app/App';
import React from 'react';
import { connect } from 'react-redux';
import DraggingBackground from 'utils/containers/DraggingBackground';
import ReactToDomEventMapper from 'utils/containers/ReactToDomEventMapper';
import './app/App.css';

const mapStateToProps = state => ({
  panelIds: selectors.getPanelIds(state)
});

const AppWrapped = propsFromConnect => (
  <DraggingBackground
    render={eventMap => (
      <ReactToDomEventMapper
        domEventTarget={window}
        reactEventMap={eventMap}
        render={() => <App {...propsFromConnect} />}
      />
    )}
  />
);

const AppConnected = connect(mapStateToProps)(AppWrapped);

export default AppConnected;
