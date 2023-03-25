// filter
/* const numbersArray = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const large = numbersArray.filter(number => number > 20);
const short = numbersArray.filter(number => number < 20)
console.log(large);
console.log(short); */

// reduce
const arrayOfNumb = [1, 2, 3, 4, 5];
// const total = arrayOfNumb.reduce((previous, current)=> previous + current, 0); 
// or
const total = arrayOfNumb.reduce((previous, current) => { return previous + current }, 0);
console.log(total);


const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}

// Dot Notation
const marks = student.marks;
const math = student.marks.math;

// Bracket Notation
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const subjectMarks2 = student.marks['math'];
const marks2 = student.marks[subject];
console.log(marks);
console.log(math);
console.log(chemistry);
console.log(subjectMarks);
console.log(subjectMarks2);
console.log(marks2);



//Array & Object Destructuring
const student = {
    name: "abul",
    age: 18,
    class: 12,
    score: 786,
    height: 158
}


const [first, second, third] = [12, 23, 65, 58];;


// const age = student.age;
// // or
// const {age, score, name} = student;
// console.log(score, name);
console.log(first+third);