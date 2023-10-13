let io;

const { Server } = require("socket.io");
const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);
        socket.on("send_message", (data) => {
            console.log("receive Message:", data)
        });
        socket.emit("message", "message send from backend")
        socket.on("disconnect", () => {
            console.log("User Disconnected", socket.id);
        });
    });

}

const emitMessage = (data) => {
    io.emit('payment_response', data);
}

module.exports = {
    initSocket,
    emitMessage
}

