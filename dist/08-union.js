"use strict";
const statusX = 'ok';
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    console.log(id);
}
function welcome(preson) {
    if (Array.isArray(preson)) {
        console.log(`Hello, ${preson.join(' ')}`);
    }
    else {
        console.log(`Hello ${preson}`);
    }
}
function changeGrade(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: 'Vova',
    skills: ['HTML', 'CSS', 'JS'],
};
changeGrade(dev1, 'middle');
