export default generate => unavailables => {
  let result;
  do {
    result = generate();
  } while (unavailables.includes(result));
  return result;
};
