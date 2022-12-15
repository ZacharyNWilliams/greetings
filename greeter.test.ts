import{Greeter} from './greeter';

describe('greeter and name tests', () => {
    test('greeting with default parameter', () => {
      let greeter = new Greeter('Hello');
      expect(greeter.greet('Zach')).toBe('Hello, Zach!');
    });
    
    test('greeter with custom parameter', () => {
      let greeter = new Greeter('Hello');
      expect(greeter.greet('Zachary')).toBe('Hello, Zachary!');
  
    });
  });