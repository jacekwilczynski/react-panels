import PropTypes from 'prop-types';
import React from 'react';

const translateEventType = reactName => reactName.slice(2).toLowerCase();

const translateEventMap = reactEventMap => {
  const domEventMap = {};
  Object.keys(reactEventMap).forEach(reactEventType => {
    domEventMap[translateEventType(reactEventType)] =
      reactEventMap[reactEventType];
  });
  return domEventMap;
};

class ReactToDomEventMapper extends React.Component {
  static propTypes = {
    domEventTarget: PropTypes.object.isRequired,
    reactEventMap: PropTypes.object,
    render: PropTypes.func
  };

  static defaultProps = {
    reactEventMap: {},
    render: () => null
  };

  domEventMap = {};

  constructor(props) {
    super(props);
    this.setEventListeners(props.reactEventMap);
  }

  componentDidUpdate() {
    this.setEventListeners(this.props.reactEventMap);
  }

  setEventListeners = reactEventMap => {
    this.removeDomListeners(this.domEventMap);
    this.domEventMap = translateEventMap(reactEventMap);
    this.addDomListeners(this.domEventMap);
  };

  removeDomListeners(domEventMap) {
    Object.keys(domEventMap).forEach(domEventType =>
      this.props.domEventTarget.removeEventListener(
        domEventType,
        domEventMap[domEventType]
      )
    );
  }

  addDomListeners(domEventMap) {
    Object.keys(domEventMap).forEach(domEventType =>
      this.props.domEventTarget.addEventListener(
        domEventType,
        domEventMap[domEventType]
      )
    );
  }

  render() {
    return this.props.render();
  }
}

export default ReactToDomEventMapper;
