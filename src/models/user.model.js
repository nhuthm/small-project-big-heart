"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = exports.create = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, unique: true },
    password: { type: String },
});
const UserModel = mongoose_1.default.model('User', UserSchema);
function create(user) {
    throw new Error('Function not implemented.');
}
exports.create = create;
function findOne(arg0) {
    throw new Error('Function not implemented.');
}
exports.findOne = findOne;
