"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmCommandExistence = void 0;
var command_exists_1 = __importDefault(require("command-exists"));
var error_1 = require("./error");
exports.confirmCommandExistence = function () {
    var commands = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        commands[_i] = arguments[_i];
    }
    commands.forEach(function (command) {
        command_exists_1.default(command).catch(function () {
            error_1.commandNotFound(command);
        });
    });
};
