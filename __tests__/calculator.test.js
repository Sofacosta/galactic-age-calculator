import {Calculator} from './../src/calculator.js';
describe ('Calculator', () => {
  let calculator; 

  beforeEach(() => {
    calculator = new Calculator(32,78);
  });

test ('should create a calculator object', () => {
  expect(calculator.age).toEqual(32);
});

test ('should create a planet calculator returning your planet age', () => {
  expect(calculator.planetAgeCalculator()).toEqual();
}); 

});