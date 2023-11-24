import net from "node:net";
import dotenv from "dotenv";
import { writeHistory } from "../utils/handleHistory.js";
import { randomUUID } from "node:crypto";
dotenv.config();

let PORT = process.env.PORT ?? 2323;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {

    const id = randomUUID();
    socket.on("data", (bufferData) => {
        const data = JSON.parse(bufferData.toString());

        console.log(data);
    });

    socket.on("close", () => {
        writeHistory('disconnected', id);
    });

    socket.on("error", () => {
        writeHistory('disconnected', id);
    });


    console.log("Client connection established", new Date().toLocaleString());
    writeHistory('connected', id);
})

serverTCP.listen(PORT,()=>{
    console.log(`Server is up on port: ${PORT} - ${new Date().toLocaleString()}`);
})