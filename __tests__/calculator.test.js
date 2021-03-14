import { Calculator } from './../src/calculator.js';
describe('Calculator', () => {
  let calculator; 

  beforeEach(() => {
    calculator = new Calculator(32,80);
  });

  test('should create a calculator object', () => {
    expect(calculator.age).toEqual(32);
  });

  test('should create a planet calculator returning your planet age', () => {
    expect(calculator.planetAgeCalculator()).toEqual({ mercury:32/.24, venus:32/.64, mars:32/1.88, jupiter: 32/11.86 });
  }); 

  test('should calculate life expectency in each planet', () => {
    const planetAge = calculator.planetAgeCalculator();
    expect(calculator.planetExpectancyCalculator(planetAge)).toEqual({
      mercury: 80 - planetAge.mercury, 
      venus: 80 - planetAge.venus, 
      mars: 80 - planetAge.mars, 
      jupiter: 80 - planetAge.jupiter, 
    });
  });
});