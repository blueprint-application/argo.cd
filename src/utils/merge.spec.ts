import { expect } from 'chai';
import { merge } from './merge';

describe('merge', () => {
  it('should merge two objects with simple properties', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = merge(target, source);
    expect(result).to.deep.equal({ a: 1, b: 3, c: 4 });
  });

  it('should merge two objects with arrays', () => {
    const target = { a: [1, 2], b: [3] };
    const source = { a: [4], c: [5, 6] };
    const result = merge(target, source);
    expect(result).to.deep.equal({ a: [1, 2, 4], b: [3], c: [5, 6] });
  });

  it('should merge two objects with nested objects', () => {
    const target = { a: { x: 1 }, b: { y: 2 } };
    const source = { a: { y: 3 }, c: { z: 4 } };
    const result = merge(target, source);
    expect(result).to.deep.equal({ a: { x: 1, y: 3 }, b: { y: 2 }, c: { z: 4 } });
  });

  it('should merge an empty object with a non-empty object', () => {
    const target = {};
    const source = { a: 1, b: { x: 2 } };
    const result = merge(target, source);
    expect(result).to.deep.equal({ a: 1, b: { x: 2 } });
  });

  it('should merge a non-empty object with an empty object', () => {
    const target = { a: 1, b: { x: 2 } };
    const source = {};
    const result = merge(target, source);
    expect(result).to.deep.equal({ a: 1, b: { x: 2 } });
  });
});
