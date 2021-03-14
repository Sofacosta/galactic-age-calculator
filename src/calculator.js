export class Calculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.planetAge = this.planetAgeCalculator(); 
    this.planetExpectancy = this.planetExpectancyCalculator(this.planetAgeCalculator());
  }
  planetAgeCalculator() {
    const mercury = .24;
    const venus = .64;
    const mars = 1.88;
    const jupiter = 11.86;

    const planetAge = {
      mercury: this.age / mercury,
      venus: this.age / venus, 
      mars: this.age / mars,
      jupiter: this.age / jupiter,
    };

    return planetAge;
  }
  planetExpectancyCalculator(planetAge) {
    const planetExpectancy = {
      mercury: this.expectancy - planetAge.mercury, 
      venus: this.expectancy - planetAge.venus, 
      mars: this.expectancy - planetAge.mars, 
      jupiter: this.expectancy - planetAge.jupiter, 
    };
    
    return planetExpectancy;
  }

}

const age = 34;
const expectancy = 80;
const calculator = new Calculator(age, expectancy);
const planetAge = calculator.planetAgeCalculator();
const planetExpectancy = (planetAge) => calculator.planetExpectancyCalculator(planetAge);

// UI



