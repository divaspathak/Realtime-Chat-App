"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = new Map();
wss.on("connection", (socket) => {
    console.log(socket);
    let userCount = 0;
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message.toString());
        userCount++;
        allSockets.set(userCount, socket);
        socket.send(`Message Received: ${parsedMessage.payload.message}`);
    });
});
