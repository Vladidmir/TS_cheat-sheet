"use strict";
function printtPoint(point) {
    console.log(`Coordinate of point is x: ${point.x} and y ${point.y}`);
}
const obj1 = {
    x: '1',
    y: '2',
};
printtPoint(obj1);
const obj2 = {
    x: '1',
    y: '2',
    z: '4',
};
printtPoint(obj2);
function printName(user) {
    if (user.lastName) {
        console.log(`Nice to meet you Mr.${user.lastName.toLocaleUpperCase()}`);
    }
    // console.log(`Nice to meet you Mr.${(user.lastName || user.firsName).toLocaleUpperCase()}`)
}
printName({ firsName: 'Vova' });
const user1 = {
    email: 'Vova',
    isOnline: false,
    lastVisited: new Date(22, 6, 2),
    login: 'bla@gmai.com',
    password: '1111',
};
const admin1 = {
    email: 'Vova',
    isOnline: false,
    lastVisited: new Date(22, 6, 2),
    login: 'bla@gmai.com',
    password: '1111',
    role: 'Admin'
};
function greatingPerson(person) {
    if (person.login.length && person.password.length > 0) {
        console.log(`Hello${person.login}`);
    }
}
greatingPerson(user1);
greatingPerson(admin1);
