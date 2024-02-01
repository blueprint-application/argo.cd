import { expect } from 'chai';
import { pick } from './pick';

describe('pick', () => {
  it('should pick properties from a simple object', () => {
    const obj = { name: 'John', age: 30, email: 'john@example.com' };
    const result = pick(obj, ['name', 'email']);
    expect(result).to.deep.equal({ name: obj.name, email: obj.email });
  });

  it('should pick properties from an object with optional properties', () => {
    interface User {
      name: string;
      age?: number;
      email: string;
    }

    const obj: User = { name: 'Jane', email: 'jane@example.com' };
    const result = pick(obj, ['name', 'age']);
    expect(result).to.deep.equal({ name: 'Jane' });
  });

  it('should pick properties from an object with nested properties', () => {
    interface Address {
      city: string;
      street: string;
    }

    interface User {
      name: string;
      age: number;
      address: Address;
    }

    const obj: User = {
      name: 'Alice',
      age: 25,
      address: {
        city: 'New York',
        street: '123 Main St',
      },
    };

    const result = pick(obj, ['name', 'address']);
    expect(result).to.deep.equal({
      name: 'Alice',
      address: {
        city: 'New York',
        street: '123 Main St',
      },
    });
  });
});
