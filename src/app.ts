import express, { text } from "express";
import { createServer, Server } from "http";
import bodyParser from "body-parser";

import controller from "./controller"; /*특정한 파일을 불러오지 않으면 index.ts를 불러옴 */
import database from "./config/database";
const app = express();

database.sync({
  alter: true,
});

app.use(express.json());
app.use(bodyParser.json()); /*자동 비직렬화*/
app.use(controller);

const server = createServer(app);
server.listen(process.env.PORT || 5000);
