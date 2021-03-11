export class Calculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.planetAge = this.planetAgeCalculator(); 
  }
  planetAgeCalculator(){
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
    console.log(planetAge);
    return planetAge;
  }
}

//Planet Age Calculator: 
// Mercury = .24
// venus = .64
// mars = 1.88
// jupiter = 11.86;
