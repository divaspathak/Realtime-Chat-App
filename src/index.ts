import { WebSocketServer, WebSocket} from "ws";
const wss = new WebSocketServer({port: 8080}); 

let allSockets = new Map<number, WebSocket>(); 

wss.on("connection", (socket: WebSocket)=>{
    console.log(socket); 
    let userCount = 0; 
    socket.on("message", (message)=>{
        const parsedMessage = JSON.parse(message.toString()); 
        userCount++; 
        allSockets.set(userCount, socket); 
        socket.send(`Message Received: ${parsedMessage.payload.message}`)
    })
})