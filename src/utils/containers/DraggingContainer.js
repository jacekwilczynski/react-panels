import PropTypes from 'prop-types';
import React from 'react';

export const RECEIVE_VALUES = 'RECEIVE_VALUES';
export const START = 'START';
export const DRAG = 'DRAG';
export const RELEASE = 'RELEASE';
export const ABORT = 'ABORT';

const createStore = reducer => {
  let state = reducer(undefined, {});
  return {
    dispatch: action => {
      state = reducer(state, action);
    },
    getState: () => state
  };
};

class DraggingContainer extends React.Component {
  static propTypes = {
    draggingBackground: PropTypes.object.isRequired,
    onRelease: PropTypes.func,
    reducer: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
  };

  static defaultProps = {
    onRelease: () => {}
  };

  method = null;
  store = null;

  constructor(props) {
    super(props);
    this.store = createStore(props.reducer);
    this.store.dispatch({
      type: RECEIVE_VALUES,
      values: this.props.values
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values !== this.props.values) {
      this.store.dispatch({
        type: RECEIVE_VALUES,
        values: this.props.values
      });
    }
  }

  getState = () => this.store.getState();

  startDragging = method => event => {
    event.preventDefault();
    if (event.persist) event.persist();
    this.method = method;
    this.store.dispatch({
      type: START,
      method,
      event
    });
    this.props.draggingBackground.startDragging([this]);
    this.forceUpdate();
  };

  drag = event => {
    this.store.dispatch({
      type: DRAG,
      method: this.method,
      event
    });
    this.forceUpdate();
  };

  release = event => {
    this.store.dispatch({
      type: RELEASE,
      method: this.method,
      event
    });
    this.props.onRelease(this.getState());
    this.forceUpdate();
  };

  abort = () => {
    this.store.dispatch({
      type: ABORT
    });
    this.forceUpdate();
  };

  render() {
    return this.props.render(this);
  }
}

export default DraggingContainer;
