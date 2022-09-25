"use strict";
function getLength(arg) {
    return arg.length;
}
getLength('123');
getLength(['123']);
getLength({ length: 12 });
// getLength(123)
// getLength(true)
