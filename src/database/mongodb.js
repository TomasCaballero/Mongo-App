import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const uriDB = process.env.URI_DB;

const clientMongo = new MongoClient(uriDB);

const createConnectionMongo = async () => {
    try{
        await clientMongo.connect();
        console.log("Connected to Mongo");
    }catch(err){
        console.log(err);
    }
    
    // await clientMongo.close();
}

export {clientMongo,createConnectionMongo};