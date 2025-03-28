//Gave the string type for this name parameter
function printName(name: string) {
  console.log(`Hello ${name}!`);
}
printName("Samantha");

//Gave the string type for this city parameter
let printAddress = (city: string) => {
  console.log(`Address : ${city}`);
};
printAddress("Texas");

//Gave the number type for this age parameter
function printAge(age: number) {
  console.log(`Age : ${age}`);
}
printAge(45);

//Gave the boolean type for this status parameter.
let lifeStatus = (status: boolean) => {
  console.log(`Married : ${status}`);
};
lifeStatus(true);

//You can set multiple parameter annotations too.
function printAnimal(
  animalOne: string,
  animalTwo: string,
  animalThree: string
) {
  console.log(`${animalOne} & ${animalTwo} & ${animalThree}`);
}
printAnimal(`cat`, `rat`, `bat`);

//You can do it with the arrow function too...
let printNames = (personOne: string, personTwo: string, personThree: string) =>
  console.log(`${personOne},${personTwo},${personThree}`);

printNames("Dean", `Sam`, "John");
