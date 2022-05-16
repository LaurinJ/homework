"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.Person = (0, mongoose_1.model)("Person", personSchema);
