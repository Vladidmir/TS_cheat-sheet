"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let word = null;
const num = 10;
if (num > 5) {
    word = 'abc';
}
console.log(word.toLocaleLowerCase());
function printName(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person === null || person === void 0 ? void 0 : person.age);
}
const personsArr = [
    {
        name: 'Vika',
        age: 21,
        sex: 'female',
    },
    {
        name: 'Vova',
        age: 22,
        sex: 'male',
    },
];
const famalePeople = personsArr.find(person => person.sex === 'female');
