
const numbers = [1, 2, 3, 4, 5];

// create new array from an array after calculating elements inside using for loop
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const numberDouble = number * 1
    newNumbers.push(numberDouble)
    // console.log(numberDouble);
}
console.log(newNumbers);

// create new array from an array after calculating elements inside using for of loop
const doubleNumbers = [];
for (const number of numbers) {
    numberDoubles = number * 2
    doubleNumbers.push(numberDoubles);
    // console.log(numberDoubles);
}
console.log(doubleNumbers);

// create new array from an array after calculating elements inside using function
function doubledNumbers(numbers) {
    const doubleNumbers = [];
    for (const number of numbers) {
        numberDoubles = number * 3
        doubleNumbers.push(numberDoubles);
        // console.log(numberDoubles);
    }
    return doubleNumbers;
}
const doubleNUmbersInFunction = doubledNumbers(numbers);
console.log(doubleNUmbersInFunction);

// create new array from an array after calculating elements inside using regular function or, arrow function call into function
function newDoubledNumbers(numbers) {
    const doubleNumbers = [];
    for (const number of numbers) {
        // numberDoubles = number * 2 or,
        numberDoubles = makeItDouble(number);
        // numberDoubles = doubleIt(number);
        doubleNumbers.push(numberDoubles);
        // console.log(numberDoubles);
    }
    return doubleNumbers;
}

function makeItDouble(number) {
    return number * 4 
}

// or
const doubleIt = number => number * 4;

const newDoubledNumbersArray = newDoubledNumbers(numbers);
// or
// const newDoubledNumbersArray = newDoubledNumbers(number => number * 4);
// const newDoubledNumbersArray = newDoubledNumbers(x => x * 4);
console.log(newDoubledNumbersArray);

const arrayOfDoubledNumbers = numbers.map(doubleIt);
console.log(arrayOfDoubledNumbers);


const array = [15, 18, 21, 24, 27];

const result = array.map(num => num / 3);
console.log(result);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000},
];

const item = products.map(product => product);
console.log(item);
console.log(products.map(x => x.id));
console.log(products.map(y => y.name));
console.log(products.map(z => z.price));