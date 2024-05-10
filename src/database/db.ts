import path from "path";
import { createConnection } from "typeorm";
import { User } from "../entities/user.entity";

async function connectToDatabase(){
    try{

        const connection = await createConnection({
            type:'sqlite',
            database: path.join(__dirname,'managing.db'),
            synchronize:true,
            logging:true,
            entities:[User]
        });
        console.log('connected to managing.db');
        return connection
    }catch(error){
        console.error('error connecting to managing.db', error)
        throw error;
    }
}


connectToDatabase()
    .then(connection =>{

    })
    .catch(error =>{
        throw error
    })