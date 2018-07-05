import Panel from 'components/PanelConnected';
import PropTypes from 'prop-types';
import React from 'react';

const App = ({ panelIds }) => (
  <div className="app">
    {panelIds.map(panelId => <Panel key={panelId} id={panelId} />)}
  </div>
);

App.propTypes = {
  panelIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
