"use strict";
const numbers = [1, 2, 3, 4, 5];
const strs = [];
const strs2 = [];
const cars = [];
cars.push({ wheels: 4, brand: 'lada' });
const arrOfArr = [];
arrOfArr.push(['']);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index);
    });
}
