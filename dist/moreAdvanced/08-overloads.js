"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
add('1', '1');
function asuncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asuncSum(1, 2);
function head(value) {
    return value[0];
}
const q = head('ssd');
const t = head([1, 2, 3]);
