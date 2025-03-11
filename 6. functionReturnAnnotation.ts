//If you wanna return some value from your function annotation,
//Then you have to mention that after your function's parameter.
//Look how you can do it....

function printThisName(firstName: string): string {
  return firstName;
}
console.log(printThisName("Samantha"));

//Now you can try it with arrow functions too.
let printThisOneName = (name: string): string => {
  return name;
};
console.log(printThisOneName("Dean Winchester"));
