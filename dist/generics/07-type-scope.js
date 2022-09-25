"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = exports.typleCreator = void 0;
function typleCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.typleCreator = typleCreator;
const toupleWith1 = typleCreator(1);
const toupleResult = toupleWith1(2);
console.log(toupleResult);
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
