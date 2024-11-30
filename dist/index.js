"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("User Connected");
    let userCount = 0;
    socket.on("message", (message) => {
        allSockets.forEach((item) => {
            if (item != socket) {
                item.send(message.toString() + " : Sent from the server");
            }
        });
    });
});
