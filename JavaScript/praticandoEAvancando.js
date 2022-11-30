/*
let weight;

console.log(typeof weight);
*/
/*
let name = 'Naomi';
let age = 32;
let stars = 4.3;
let isSubscribed = true;
*/

let student = {
    name:"Naomi",
    age:32,
    stars:4.3,
    isSubscribed:true,
    weight:72
}

// console.log(student);
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)


let students = []

students = [
    student,
]
//console.log(students)
//console.log(students[0])

const Ton = {
    name:"Ton",
    age:28,
    stars:4.9,
    isSubscribed:true,
    weight:98
}
students = [
    student,
    Ton
]

//console.log(students)
//console.log(students[1])

const john = {
    name:"John",
    age:35,
    stars:3.5,
    isSubscribed:true,
    weight:110
}

students [2] = john;

console.log(students)
console.log(students[2])