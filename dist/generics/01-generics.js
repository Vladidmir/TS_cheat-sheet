"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray('as', 'ded');
const obj1 = {
    title: 'test',
    value: 12,
};
const obj2 = {
    title: '123',
    value: [1, 2, 3]
};
const head = (value) => value[0];
function append(el, list) {
    return list.concat(el);
}
append(1, [1, 2, 3]);
