import express from "express";
import indexRouter from "./routers";

const app = express();

app.use(indexRouter);

export { app };
