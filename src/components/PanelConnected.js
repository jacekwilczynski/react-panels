import Panel from 'components/panel/Panel';
import { operations } from 'modules/panels';
import { selectors } from 'modules/reducer';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import DraggingContainer from 'utils/containers/DraggingContainer';
import drag, { getValues } from 'utils/containers/draggingContainer/drag';
import DragBackgroundContext from 'utils/contexts/DraggingBackgroundContext';

const WrappedPanel = propsFromConnect => (
  <DragBackgroundContext.Consumer>
    {draggingBackground => (
      <DraggingContainer
        values={propsFromConnect}
        draggingBackground={draggingBackground}
        onRelease={state => propsFromConnect.updatePanel(getValues(state))}
        reducer={drag}
        render={draggingContainer => (
          <Panel
            {...getValues(draggingContainer.getState())}
            moving={draggingBackground.state.active}
            startDragging={draggingContainer.startDragging}
          >
            Hello world!
          </Panel>
        )}
      />
    )}
  </DragBackgroundContext.Consumer>
);

const mapStateToProps = (state, { id }) => {
  const { title, left, top, width, height } = selectors.getPanel(state, id);
  return {
    title,
    left,
    top,
    width,
    height
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  updatePanel: values => dispatch(operations.updatePanel({ id, ...values }))
});

const ConnectedPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedPanel);

ConnectedPanel.propTypes = {
  id: PropTypes.string.isRequired
};

export default ConnectedPanel;
