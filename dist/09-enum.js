"use strict";
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
function upGrade(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
}
