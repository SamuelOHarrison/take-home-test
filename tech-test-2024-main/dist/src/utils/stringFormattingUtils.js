"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedCatsString = void 0;
function getFormattedCatsString(cats) {
    let formattedString = "";
    cats.forEach((cat, index) => {
        if (index === 0) {
            formattedString = formattedString + cat.name;
        }
        else if (index === cats.length - 1) {
            formattedString = formattedString + " and " + cat.name;
        }
        else {
            formattedString = formattedString + ", " + cat.name;
        }
    });
    return formattedString;
}
exports.getFormattedCatsString = getFormattedCatsString;
//# sourceMappingURL=stringFormattingUtils.js.map