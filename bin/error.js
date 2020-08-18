"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandNotFound = void 0;
exports.commandNotFound = function (command) {
    throw new Error("Command " + command + " is not found. Please install " + command + " before running this.");
};
