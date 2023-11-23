import net from "node:net"
import dotenv from "dotenv"
import { stringify } from "node:querystring";
dotenv.config();

const option = {
    port:process.env.PORT ?? 2323,
    host:process.env.HOST ?? "localhost"
}

const clientTCP = net.connect(option);

clientTCP.on('connect', ()=> {
    console.log("Client connected");

    const args = process. argv.splice(2);
    
    clientTCP.write(JSON.stringify(args));

    clientTCP.end();
})