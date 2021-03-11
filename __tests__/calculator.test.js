import {Calculator} from './../src/calculator.js';
describe ('Calculator', () => {
 test ('should create a calculator object', () => {
   const calculator = new Calculator();
  expect(calculator.age).toEqual(32);
})});