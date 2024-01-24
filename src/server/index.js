const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082}); //starts websocket server on port 8082

//this function will run when the page is refreshed or connected to
//ws is one connection, wss refers to the server
wss.on("connection", ws => {
    console.log("new client connected");

    //this works on the connection, not the server
    ws.on("close", ()=> {
        console.log("client has disconnected");
    });
});