const mongoose = require('mongoose');
const env = require('dotenv')
const ConnectDB =()=>{
    env.config();
    port = process.env.PORT 
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("DataBase Connected...")
    })
}
module.exports = ConnectDB;