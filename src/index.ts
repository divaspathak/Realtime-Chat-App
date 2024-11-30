import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port: 8080}); 

let allSockets = []; 

wss.on("connection", (socket)=>{
    allSockets.push(socket); 
    console.log("User Connected")
    let userCount = 0; 
    socket.on("message", (message)=>{
        allSockets.forEach((item)=>{
            if(item != socket){
                item.send(message.toString() + " : Sent from the server")
            }
        })
    })
})