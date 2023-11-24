import { randomUUID } from 'crypto';
import fs from 'fs';


const PATH = "./log/historyUser.json";


const readHistory = () =>{
    const jsonData = fs.readFileSync(PATH);
    const history = JSON.parse(jsonData.toString());

    return history;
}

const writeHistory = (state, id) =>{
    const data = readHistory();

    const register = {
        id: id,
        date: new Date().toLocaleString()
    };

    if(state === "connected"){
        data.userConnection.push(register);
    }else if(state === "disconnected"){
        data.userDisconnect.push(register);
    }

    const jsonObj = JSON.stringify(data);
    fs.writeFileSync(PATH, jsonObj);
}

const register = {
    id: randomUUID(),
    data: "23/11/2023, 20:55:17"
}

export { writeHistory}