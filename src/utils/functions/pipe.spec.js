import pipe from './pipe';

describe('pipe function', function() {
  describe('returned function', function() {
    it('should pass its arg to func and return the result', function() {
      const func = x => x + 3;
      const partial = pipe(func);
      const result = partial(2);
      expect(result).toBe(5);
    });

    it('should pipe functions in the specified order', function() {
      const f1 = x => x * 5;
      const f2 = x => x - 3;
      const f3 = x => `I've been given ${x}.`;
      const partial = pipe(
        f1,
        f2,
        f3
      );
      const result = partial(3);
      expect(result).toBe("I've been given 12.");
    });
  });
});
