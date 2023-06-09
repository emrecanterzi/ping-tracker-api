import http from "http";
import { app } from "./app";
import dotenv from "dotenv";
import path from "path";
import cronJobManager from "./cron/cronJobManager";

dotenv.config({
  path: path.join(__dirname, "env", ".env"),
});

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  cronJobManager.startStore();
  console.log(`server listening http://localhost:${PORT}`);
});
