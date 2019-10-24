const { Set } = require('../Set');

const testSet = new Set();

describe('Set class', () => {

  it('instantiates an empty array', () => {
    expect(testSet).toEqual({ array: [] });
  });

  it('adds a value to set', () => {
    const value1 = 'apple';
    testSet.add(value1);
    expect(testSet.array[0]).toBe('apple');
  });
});