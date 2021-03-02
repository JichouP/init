"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.express_mongo = exports.express = exports.react = exports.node = void 0;
var child_process_1 = require("child_process");
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var prettier_1 = require("prettier");
var cli_1 = require("./cli");
var lintstaged = {
    husky: {
        hooks: {
            'pre-commit': 'lint-staged',
        },
    },
    'lint-staged': {
        '*.{md,html,css}': ['prettier --write', 'git add'],
        '*.{ts,tsx}': ['prettier --write', 'eslint --fix', 'git add'],
    },
};
exports.node = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dependencies, devDependencies, scripts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dependencies = [];
                devDependencies = [
                    '@babel/core',
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    '@types/jest',
                    '@types/webpack',
                    '@types/webpack-node-externals',
                    '@typescript-eslint/eslint-plugin',
                    '@typescript-eslint/parser',
                    'babel-jest',
                    'babel-plugin-module-resolver',
                    'eslint',
                    'eslint-config-prettier',
                    'eslint-plugin-import',
                    'eslint-plugin-prettier',
                    'fork-ts-checker-webpack-plugin',
                    'husky',
                    'jest',
                    'lint-staged',
                    'prettier',
                    'ts-loader',
                    'ts-node',
                    'typescript',
                    'webpack',
                    'webpack-cli',
                    'webpack-merge',
                    'webpack-node-externals',
                ];
                scripts = {
                    start: 'node dist/app.js',
                    build: 'webpack --config webpack.prod.ts',
                    test: 'jest --color',
                    testWithCoverage: 'jest --collectCoverage --color',
                    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
                    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
                };
                cli_1.spinner.start();
                return [4 /*yield*/, npm(dependencies, devDependencies)];
            case 1:
                _a.sent();
                copyPreset('node');
                assignPackageJson({ scripts: scripts });
                return [4 /*yield*/, tscBabel()];
            case 2:
                _a.sent();
                cli_1.spinner.done();
                return [2 /*return*/];
        }
    });
}); };
exports.react = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dependencies, devDependencies, scripts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dependencies = ['react', 'react-dom', 'styled-components'];
                devDependencies = [
                    '@babel/core',
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                    '@testing-library/react',
                    '@types/jest',
                    '@types/react',
                    '@types/react-dom',
                    '@types/react-test-renderer',
                    '@types/styled-components',
                    '@types/webpack',
                    '@typescript-eslint/eslint-plugin',
                    '@typescript-eslint/parser',
                    'babel-jest',
                    'babel-plugin-module-resolver',
                    'eslint',
                    'eslint-config-prettier',
                    'eslint-import-resolver-webpack',
                    'eslint-plugin-import',
                    'eslint-plugin-prettier',
                    'eslint-plugin-react',
                    'eslint-plugin-react-hooks',
                    'fork-ts-checker-webpack-plugin',
                    'html-webpack-plugin',
                    'husky',
                    'jest',
                    'lint-staged',
                    'prettier',
                    'react-test-renderer',
                    'style-loader',
                    'ts-loader',
                    'ts-node',
                    'webpack',
                    'webpack-cli',
                    'webpack-dev-server',
                    'webpack-merge',
                    'typescript',
                ];
                scripts = {
                    start: 'webpack-dev-server --config webpack.dev.ts',
                    build: 'webpack --config webpack.prod.ts',
                    test: 'jest --color',
                    testWithUpdateSnapshot: 'jest -u --color',
                    testWithCoverage: 'jest --collectCoverage --color',
                    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
                    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
                };
                cli_1.spinner.start();
                return [4 /*yield*/, npm(dependencies, devDependencies)];
            case 1:
                _a.sent();
                copyPreset('react');
                assignPackageJson({ scripts: scripts });
                return [4 /*yield*/, tscBabel()];
            case 2:
                _a.sent();
                cli_1.spinner.done();
                return [2 /*return*/];
        }
    });
}); };
exports.express = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dependencies, devDependencies, scripts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dependencies = ['express'];
                devDependencies = [
                    '@babel/core',
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    '@types/express',
                    '@types/jest',
                    '@types/sinon-express-mock',
                    '@types/supertest',
                    '@types/webpack',
                    '@types/webpack-node-externals',
                    '@typescript-eslint/eslint-plugin',
                    '@typescript-eslint/parser',
                    'babel-jest',
                    'babel-plugin-module-resolver',
                    'eslint',
                    'eslint-config-prettier',
                    'eslint-plugin-import',
                    'eslint-plugin-prettier',
                    'fork-ts-checker-webpack-plugin',
                    'husky',
                    'jest',
                    'lint-staged',
                    'prettier',
                    'sinon',
                    'sinon-express-mock',
                    'supertest',
                    'ts-loader',
                    'ts-node',
                    'typescript',
                    'webpack',
                    'webpack-cli',
                    'webpack-merge',
                    'webpack-node-externals',
                ];
                scripts = {
                    serve: 'node dist/app.js',
                    build: 'webpack --config webpack.prod.ts',
                    test: 'jest --color',
                    testWithCoverage: 'jest --collectCoverage --color',
                    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
                    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
                };
                cli_1.spinner.start();
                return [4 /*yield*/, npm(dependencies, devDependencies)];
            case 1:
                _a.sent();
                copyPreset('express');
                assignPackageJson({ scripts: scripts });
                return [4 /*yield*/, tscBabel()];
            case 2:
                _a.sent();
                cli_1.spinner.done();
                return [2 /*return*/];
        }
    });
}); };
exports.express_mongo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dependencies, devDependencies, scripts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dependencies = ['express', 'mongoose'];
                devDependencies = [
                    '@babel/core',
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    '@shelf/jest-mongodb',
                    '@types/express',
                    '@types/jest',
                    '@types/mongoose',
                    '@types/sinon-express-mock',
                    '@types/supertest',
                    '@types/webpack',
                    '@types/webpack-node-externals',
                    '@typescript-eslint/eslint-plugin',
                    '@typescript-eslint/parser',
                    'babel-jest',
                    'babel-plugin-module-resolver',
                    'eslint',
                    'eslint-config-prettier',
                    'eslint-plugin-import',
                    'eslint-plugin-prettier',
                    'fork-ts-checker-webpack-plugin',
                    'husky',
                    'jest',
                    'lint-staged',
                    'prettier',
                    'sinon',
                    'sinon-express-mock',
                    'supertest',
                    'ts-loader',
                    'ts-node',
                    'typescript',
                    'webpack',
                    'webpack-cli',
                    'webpack-merge',
                    'webpack-node-externals',
                ];
                scripts = {
                    serve: 'node dist/app.js',
                    build: 'webpack --config webpack.prod.ts',
                    test: 'jest --color',
                    testWithCoverage: 'jest --collectCoverage --color',
                    openCoverage: 'sensible-browser ./coverage/lcov-report/index.html',
                    tsc_babel: 'tsc babel.config.ts --esModuleInterop --lib es5',
                };
                cli_1.spinner.start();
                return [4 /*yield*/, npm(dependencies, devDependencies)];
            case 1:
                _a.sent();
                copyPreset('express_mongo');
                assignPackageJson({ scripts: scripts });
                return [4 /*yield*/, tscBabel()];
            case 2:
                _a.sent();
                cli_1.spinner.done();
                return [2 /*return*/];
        }
    });
}); };
var npm = function (dependencies, devDependencies, config) {
    cli_1.spinner.setText('npm init');
    return new Promise(function (res, rej) {
        // init
        child_process_1.exec("npm init -y", function (err, stdout, stderr) {
            if (err) {
                console.error(err);
                return rej(err);
            }
            // install dependencies
            cli_1.spinner.setText('Installing Dependencies');
            child_process_1.exec("npm i " + dependencies.join(' '), function (err, stdout, stderr) {
                if (err) {
                    console.error(err);
                    return rej(err);
                }
                // install devDependencies
                cli_1.spinner.setText('Installing devDependencies');
                child_process_1.exec("npm i -D " + devDependencies.join(' '), function (err, stdout, stderr) {
                    if (err) {
                        console.error(err);
                        return rej(err);
                    }
                    res();
                });
            });
        });
    });
};
var copyPreset = function (preset) {
    cli_1.spinner.setText('Copying configuration files');
    fs_extra_1.default.copySync(path_1.default.resolve(__dirname, 'presets', preset), path_1.default.resolve(process.cwd()));
    return;
};
var assignPackageJson = function (obj) {
    cli_1.spinner.setText('Configuring npm scripts, husky and lint staged');
    var original = JSON.parse(fs_extra_1.default.readFileSync(path_1.default.resolve(process.cwd(), 'package.json')).toString());
    fs_extra_1.default.writeFileSync(path_1.default.resolve(process.cwd(), 'package.json'), prettier_1.format(JSON.stringify(__assign(__assign(__assign({}, original), lintstaged), obj)), {
        parser: 'json-stringify',
    }));
    return;
};
var tscBabel = function () {
    cli_1.spinner.setText('Transpiling babel.config.ts');
    return new Promise(function (res, rej) {
        child_process_1.exec("npm run tsc_babel", function (err, stdout, stderr) {
            if (err) {
                console.error(err);
                return rej(err);
            }
            res();
        });
    });
};
