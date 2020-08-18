"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerHandler = exports.getRandomSpinner = void 0;
var cli_spinners_1 = __importStar(require("cli-spinners"));
var cli_color_1 = __importDefault(require("cli-color"));
exports.getRandomSpinner = function () {
    var spinnerValues = Object.values(cli_spinners_1.default);
    return spinnerValues[Math.floor(Math.random() * spinnerValues.length)];
};
var SpinnerHandler = /** @class */ (function () {
    function SpinnerHandler(spinner) {
        this.spinner = spinner || cli_spinners_1.dots;
        this.text = '';
        this.spin = 0;
        this.intervalHandler = null;
    }
    SpinnerHandler.prototype.start = function () {
        if (this.intervalHandler !== null) {
            return;
        }
        this.intervalHandler = setInterval(this.updateSpinner.bind(this), this.spinner.interval);
    };
    SpinnerHandler.prototype.stop = function () {
        if (this.intervalHandler === null) {
            return;
        }
        clearInterval(this.intervalHandler);
    };
    SpinnerHandler.prototype.done = function () {
        if (this.intervalHandler !== null) {
            clearInterval(this.intervalHandler);
        }
        process.stdout.write(cli_color_1.default.erase.line + cli_color_1.default.move.left(9999));
        process.stdout.write(cli_color_1.default.green('✔ ') + this.text + '\n' + cli_color_1.default.green('✔ ' + 'Initialization completed') + '\n');
        return;
    };
    SpinnerHandler.prototype.setText = function (text) {
        if (this.intervalHandler !== null) {
            process.stdout.write(cli_color_1.default.erase.line + cli_color_1.default.move.left(9999));
            process.stdout.write(cli_color_1.default.green('✔ ') + this.text + '\n');
        }
        this.text = text;
    };
    SpinnerHandler.prototype.write = function () {
        process.stdout.write(cli_color_1.default.erase.line + cli_color_1.default.move.left(9999));
        process.stdout.write(this.spinner.frames[this.spin % this.spinner.frames.length] + " " + this.text);
    };
    SpinnerHandler.prototype.updateSpinner = function () {
        this.write();
        this.spin++;
    };
    return SpinnerHandler;
}());
exports.SpinnerHandler = SpinnerHandler;
