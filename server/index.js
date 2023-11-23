import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

let PORT = process.env.PORT ?? 2323;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {

    socket.on("data", () => {

    });

    socket.on("close", () => {
        console.log("Client disconnected",new Date().toLocaleString())
    });

    socket.on("error", () => {
        console.log("Client error",new Date().toLocaleString())
    });


    console.log("Client connection established", new Date().toLocaleString());
})

serverTCP.listen(PORT,()=>{
    console.log(`Server is up on port: ${PORT} - ${new Date().toLocaleString()}`);
})