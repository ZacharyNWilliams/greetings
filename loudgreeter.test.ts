
import{LoudGreeter} from './loudgreeter';


describe('Loudgreeter and name tests', () => {
    test('greeting with default parameter', () => {
      const greeter = new LoudGreeter('Hello');
      expect(greeter.greet('Zach')).toBe('Hello, Zach!');
    });
    
    test('Loudgreeter with name tests', () => {
      const greeter = new LoudGreeter('Hello');
      expect(greeter.greet('Zachary')).toBe('Hello, Zachary!!!');
  
    });
  });