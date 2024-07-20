const mongoose = require("mongoose")

const connectDatabase=()=>{
    mongoose.connect(`${process.env.dbURL}`).then((data)=>{
        console.log(`Mongodb connected with new server: ${data.connection.host}`);
    })
}

module.exports=connectDatabase;