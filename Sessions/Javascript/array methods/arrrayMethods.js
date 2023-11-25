// const numbers = [1, 2, 3];
// const doubled = numbers.map((num) => num * 2);

// const numbers1 = [1, 2, 3, 4, 5];
// const evenNumbers = numbers1.filter((num) => num === 2);
// console.log('evenNumbers:', evenNumbers);
// evenNumbers is [2, 4]

const numbers3 = [1, 2, 3, 4, 5];
const names = ["Vamshi", "Madhu", "Tejas"];

const modifiedValues = names?.reduce((acc, value,index, arr) => {
  acc.push({
    name: value,
    occupation: 'software dev'
  })
  
  return acc
}, []);





console.log('modifiedValues:', modifiedValues);

// const sum = numbers3.reduce((sum, currentValue) => {
//   return sum + currentValue; //  sum + numbers3[i];
// }, 0);

// console.log('numbers3:', numbers3);

// console.log(sum); // Output: 15

// const numbers4 = [1, 3, 5, 8, 9];

// const indexOfFirstEven = numbers4.findIndex((element) => element % 2 === 0);

// console.log(indexOfFirstEven); // Output: 3 (index of the first even number, which is 8)
