"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === 'string') { }
    if (typeof x === 'number') { }
    if (typeof x === 'undefined') { }
}
function example2(strs) {
    if (strs && typeof strs === 'object') { }
    if (Array.isArray(strs)) { }
    if (typeof strs === 'string') { }
}
function example3(x) {
    if (x instanceof Date) { }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim;
    }
    animal.fly();
}
