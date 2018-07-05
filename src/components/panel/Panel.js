import PropTypes from 'prop-types';
import React from 'react';
import './Panel.css';
import Resizer from './Resizer';

const Panel = ({
  left,
  top,
  width,
  height,
  title,
  children,
  moving,
  startDragging
}) => (
  <div
    className={`panel ${moving ? 'panel--moving' : ''} positioned`}
    style={{ left, top, width, height }}
  >
    <div
      className={`panel__title-bar ${moving ? 'panel__title-bar--moving' : ''}`}
      onMouseDown={startDragging('MOVE')}
    >
      <span className="panel__title">{title}</span>
    </div>
    <Resizer startDragging={startDragging} />
    <div className="panel__body">{children}</div>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  left: PropTypes.number,
  moving: PropTypes.bool,
  startDragging: PropTypes.func,
  title: PropTypes.string,
  top: PropTypes.number,
  width: PropTypes.number
};

Panel.defaultProps = {
  height: 100,
  left: 100,
  moving: false,
  startDragging: () => {},
  title: '',
  top: 100,
  width: 100
};

export default Panel;
