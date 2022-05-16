"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estate = void 0;
const mongoose_1 = require("mongoose");
const estateSchema = new mongoose_1.Schema({
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    },
    estateType: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.Estate = (0, mongoose_1.model)("Estate", estateSchema);
