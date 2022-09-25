"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error('User has no displayName field');
}
function LogUser(user) {
    assertDisplayName(user);
    console.log(user.displayName.toLocaleUpperCase());
}
function isAnInternetOrder(order) {
    return !!order && 'email' in order;
}
function isATelephoneOrder(order) {
    return !!order && 'number' in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
