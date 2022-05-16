"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const person_1 = require("./models/person");
const estate_1 = require("./models/estate");
const regionsData_1 = require("./regionsData");
const validator_1 = require("./validators/validator");
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
router.post("/lead", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const errors = (0, validator_1.validator)(data);
    if (Object.keys(errors).length) {
        ctx.status = 400;
        ctx.body = errors;
    }
    else {
        const _person = yield new person_1.Person(data).save();
        const _estate = yield new estate_1.Estate(Object.assign(Object.assign({}, data), { seller: _person._id })).save();
        ctx.status = 200;
    }
}));
router.get("/districts", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const region = String(ctx.request.query.q);
    ctx.body = regionsData_1.regionsData[region];
}));
app.use(router.routes()).use(router.allowedMethods());
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/reas")
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("Could not connect to MongoDB... ", err));
app.listen(4000, () => {
    console.log("Server is running");
});
