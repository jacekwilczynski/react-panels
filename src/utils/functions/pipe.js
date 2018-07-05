const pipe = (...funcs) => arg =>
  funcs.reduce((currentValue, nextFunc) => nextFunc(currentValue), arg);

export default pipe;
