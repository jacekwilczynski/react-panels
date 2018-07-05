import React, { Fragment } from 'react';
import './Resizer.css';

const Resizer = ({ startDragging }) => (
  <Fragment>
    <div
      className="resizer resizer--horizontal resizer--n"
      onMouseDown={startDragging('RESIZE_N')}
    />
    <div
      className="resizer resizer--corner resizer--ne"
      onMouseDown={startDragging('RESIZE_NE')}
    />
    <div
      className="resizer resizer--vertical resizer--e"
      onMouseDown={startDragging('RESIZE_E')}
    />
    <div
      className="resizer resizer--corner resizer--se"
      onMouseDown={startDragging('RESIZE_SE')}
    />
    <div
      className="resizer resizer--horizontal resizer--s"
      onMouseDown={startDragging('RESIZE_S')}
    />
    <div
      className="resizer resizer--corner resizer--sw"
      onMouseDown={startDragging('RESIZE_SW')}
    />
    <div
      className="resizer resizer--vertical resizer--w"
      onMouseDown={startDragging('RESIZE_W')}
    />
    <div
      className="resizer resizer--corner resizer--nw"
      onMouseDown={startDragging('RESIZE_NW')}
    />
  </Fragment>
);

export default Resizer;
