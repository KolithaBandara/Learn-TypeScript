//'Void' is a type that represents the absence of any value.
//It's often use as the return type for functions that do not return a value.

//If you create a function who don't return a value or something,
//you have to mention it on that function.
//How?
//Like this👇🏻

function printName01(firstName: string): void {
  console.log(firstName);
}
printName01("Dean Winchester");

//Let's try it with arrow functions too.
let printName02 = (fullName: string): void => {
  console.log(fullName);
};
printName02(`Sam Winchester`);
