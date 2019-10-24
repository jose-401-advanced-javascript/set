const { Set } = require('../Set');

const testSet = new Set();
const value1 = 'apple';

describe('Set class', () => {

  it('instantiates an empty array', () => {
    expect(testSet).toEqual({ array: [] });
  });

  it('adds a value to set', () => {
    testSet.add(value1);
    expect(testSet.array[0]).toBe('apple');
  });

  it('deletes value from a set', () => {
    testSet.remove('apple');
    expect(testSet).toEqual({ array: [] });
  });

  it('returns right bool based on value provided', () => {
    testSet.add(value1);
    expect(testSet.has('apple')).toBe(true);
    expect(testSet.has('banana')).toBe(false);
  });
});