const { Set } = require('../Set');

const set = new Set();
const set2 = new Set();
const value1 = 'apple';
const value2 = 'banana';
const value3 = 'cherry';

describe('Set class', () => {

  it('instantiates an empty array', () => {
    expect(set).toEqual({ array: [] });
  });

  it('adds a value to set', () => {
    set.add(value1);
    expect(set.array[0]).toBe('apple');
  });

  it('deletes value from a set', () => {
    set.remove('apple');
    expect(set).toEqual({ array: [] });
  });

  it('returns right bool based on value provided', () => {
    set.add(value1);
    expect(set.has('apple')).toBe(true);
    expect(set.has('banana')).toBe(false);
  });

  it('returns an intersection of two sets', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(set.intersection(set2)).toEqual({ array: ['banana'] });
  });

  it('returns union of two sets', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(set.union(set2)).toEqual({ array: ['apple', 'banana', 'cherry'] });
  });

  it('returns the difference of two sets', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(set.difference(set2)).toEqual({ array: ['apple', 'cherry'] });
  });

  it('returns the intersection of two sets via static method', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(Set.intersection(set, set2)).toEqual({ array: ['banana'] });
  });

  it('returns the union of two sets via static method', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(Set.union(set, set2)).toEqual({ array: ['apple', 'banana', 'cherry'] });
  });

  it('returns the difference of two sets via the static method', () => {
    set.add(value1);
    set.add(value2);
    set2.add(value2);
    set2.add(value3);
    expect(Set.difference(set, set2)).toEqual({ array: ['apple', 'cherry'] });
  });
});