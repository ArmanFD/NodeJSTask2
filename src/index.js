import express from "express";
import mongoose  from "mongoose";
import "dotenv/config.js";
import { router } from "./route.js";

const app = express();
const port = 4000;
const DB = process.env.DB
app.use(express.json());
app.use("/api/books", router);
async function start () {
    await mongoose.connect(DB)
    await app.listen(port, () => { console.log( `app is listening at port ${port}`)})
}
start()