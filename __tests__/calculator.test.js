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
  expect(calculator.planetAgeCalculator()).toEqual({mercury:32/.24, venus:32/.64, mars:32/1.88, jupiter: 32/11.86});
}); 

});