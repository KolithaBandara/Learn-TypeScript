//Let see how's working default type of function parameter annotations.
function printCheck(person = "Hunter") {
  return person;
}
console.log(typeof printCheck()); //String type

//try it with arrow function
const printCheck2 = (person1 = "Sam", person2 = "Dean") => {
  return `${person1},${person2}`;
};
console.log(typeof printCheck2()); //String type

//We didn't set a data type or data types for that top functions.
// But they work well with their default data types.
// So, now you can see the default data type of function is string.
