import {Calculator} from './../src/calculator.js';
describe ('Calculator', () => {
 test ('should create a calculator object', () => {
   const calculator = new Calculator(32);
  expect(calculator.age).toEqual(32);
})});