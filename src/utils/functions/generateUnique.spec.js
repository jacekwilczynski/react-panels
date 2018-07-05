import generateUnique from './generateUnique';

describe('generateUnique', function() {
  it('should return the result of generate', function() {
    const generate = () => 'test text';
    const result = generateUnique(generate)([]);
    expect(result).toBe('test text');
  });

  it('should call generate as long as necessary to get a unique value', function() {
    let returnValue = 0;
    const generate = () => returnValue++;
    const unavailables = [5, 4, 8, 1, 2, 0, 3, 7];
    const result = generateUnique(generate)(unavailables);
    expect(result).toBe(6);
  });
});
