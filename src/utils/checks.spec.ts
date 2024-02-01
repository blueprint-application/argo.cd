import { expect } from 'chai';
import { isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isUndefined } from './checks';

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isUndefined(null)).to.be.false;
    expect(isUndefined(0)).to.be.false;
    expect(isUndefined('')).to.be.false;
    expect(isUndefined(false)).to.be.false;
  });
});

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isNull(undefined)).to.be.false;
    expect(isNull(0)).to.be.false;
    expect(isNull('')).to.be.false;
    expect(isNull(false)).to.be.false;
  });
});

describe('isBoolean', () => {
  it('should return true for true and false', () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isBoolean(undefined)).to.be.false;
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean('')).to.be.false;
  });
});

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(123)).to.be.true;
    expect(isNumber(0)).to.be.true;
    expect(isNumber(-456)).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber(null)).to.be.false;
    expect(isNumber('')).to.be.false;
    expect(isNumber(true)).to.be.false;
  });
});

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).to.be.true;
    expect(isString('')).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isString(undefined)).to.be.false;
    expect(isString(null)).to.be.false;
    expect(isString(123)).to.be.false;
    expect(isString(true)).to.be.false;
  });
});

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).to.be.true;
    expect(isArray([1, 2, 3])).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isArray(undefined)).to.be.false;
    expect(isArray(null)).to.be.false;
    expect(isArray({})).to.be.false;
    expect(isArray('')).to.be.false;
  });
});

describe('isFunction', () => {
  it('should return true for functions', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isFunction(() => {})).to.be.true;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isFunction(function () {})).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isFunction(undefined)).to.be.false;
    expect(isFunction(null)).to.be.false;
    expect(isFunction({})).to.be.false;
    expect(isFunction('')).to.be.false;
  });
});

describe('isObject', () => {
  it('should return true for objects (excluding arrays and functions)', () => {
    expect(isObject({})).to.be.true;
    expect(isObject({ a: 1, b: 2 })).to.be.true;
  });

  it('should return false for other values', () => {
    expect(isObject(undefined)).to.be.false;
    expect(isObject(null)).to.be.false;
    expect(isObject([])).to.be.false;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isObject(() => {})).to.be.false;
    expect(isObject('')).to.be.false;
    expect(isObject(123)).to.be.false;
  });
});
