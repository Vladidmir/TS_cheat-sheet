"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
// <button OnClick='myClickHandler'>Click Me!</button>
function myClickHandler(event) {
    this.disabled = true;
}
