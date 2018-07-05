import DragBackgroundContext from 'utils/contexts/DraggingBackgroundContext';
import React from 'react';

class DraggingBackground extends React.Component {
  state = {
    active: false
  };

  containers = [];

  startDragging = containers => {
    this.containers = containers;
    this.setState({ active: true });
  };

  stopDragging = () => {
    this.setState({ active: false });
    this.containers.forEach(container => {
      container.release();
    });
  };

  onMouseMove = event => {
    event.preventDefault();
    if (event.buttons === 0) {
      this.stopDragging();
    } else {
      this.containers.forEach(container => container.drag(event));
    }
  };

  onMouseUp = event => {
    event.preventDefault();
    this.stopDragging();
  };

  onKeyDown = event => {
    event.preventDefault();
    if (event.key === 'Escape') {
      this.setState({ active: false });
      this.containers.forEach(container => {
        container.abort();
      });
    }
  };

  getComponentEventProps = () =>
    this.state.active
      ? {
          onMouseMove: this.onMouseMove,
          onMouseUp: this.onMouseUp,
          onKeyDown: this.onKeyDown
        }
      : {};

  render() {
    return (
      <DragBackgroundContext.Provider value={this}>
        {this.props.render(this.getComponentEventProps())}
      </DragBackgroundContext.Provider>
    );
  }
}

export default DraggingBackground;
