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
    expect(calculator.planetAgeCalculator()).toEqual({ 
      mercury: 133.33333333333334,
      venus: 50,
      mars: 17.02127659574468,
      jupiter: 2.69814502529511 });
  }); 

  test('should calculate life expectency in each planet', () => {
    const planetAge = calculator.planetAgeCalculator();
    expect(calculator.planetExpectancyCalculator(planetAge)).toEqual({
      mercury: -53.33333333333334, 
      venus: 30, 
      mars: 62.97872340425532, 
      jupiter: 77.3018549747049, 
    });
  });

  test('If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy', () => {    
    expect(calculator.hasUserSurpassedLifeExpectancy(planetExpectancy)).toEqual({
      mercury: -53.33333333333334, 
      venus: 30, 
      mars: 62.97872340425532, 
      jupiter: 77.3018549747049,
  });  
});