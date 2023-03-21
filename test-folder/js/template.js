// function declaration
function add(first, second){
    const total = first + second;
    return total;
}

// function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

//arrow function
const add3 = (first, second) => first + second;

const result = add3(2, 2);
// console.log(result);

//spread operator
const numberArray = [12, 23, 65, 58];
const numberArray2 = [...numberArray, 102, 25];
const largestOne = Math.max(...numberArray2);

// console.log(numberArray);
// console.log(numberArray2);
// console.log(largestOne);

//Array & Object Destructuring
const student = {
    name: "abul",
    age: 18,
    class: 12,
    score: 786,
    height: 158
}

const [first, second, third] = [12, 23, 65, 58];;

const {age, score, name} = student;
// console.log(score, name);
// console.log(first, third);
