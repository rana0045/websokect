import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

const server = app.listen(port, () => {
	console.log("listening on port", port);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
	ws.on("message", (data) => {
		console.log("data from client", data);

		ws.send("thanks for the message from client : " + data);
	});
	wss.on("error", (err) => {
		console.log(err.message);
	});
});
