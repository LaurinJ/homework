import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import mongoose from "mongoose";
import { Person } from "./models/person";
import { Estate } from "./models/estate";
import { regionsData } from "./regionsData";
import { validator } from "./validators/validator";

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.post("/lead", async (ctx) => {
  const data = ctx.request.body;

  const errors = validator(data);

  if (Object.keys(errors).length) {
    ctx.status = 400;
    ctx.body = errors;
  } else {
    const _person = await new Person(data).save();
    const _estate = await new Estate({ ...data, seller: _person._id }).save();

    ctx.status = 200;
  }
});

router.get("/districts", async (ctx, next) => {
  const region = String(ctx.request.query.q);
  ctx.body = regionsData[region];
});

app.use(router.routes()).use(router.allowedMethods());

mongoose
  .connect("mongodb://127.0.0.1:27017/reas")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Could not connect to MongoDB... ", err));

app.listen(4000, () => {
  console.log("Server is running");
});
