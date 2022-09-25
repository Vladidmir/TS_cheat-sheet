"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
function prop(key, obj) {
    return obj[key];
}
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
