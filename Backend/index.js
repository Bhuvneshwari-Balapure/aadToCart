const express = require('express');
const app = express();  
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRoute = require('./routes/userRoutes');
const ConnectDB = require('./DataBase/config');
app.use(express.json());
//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cors
app.use(cors());
//DataBase Connection
ConnectDB();
//Routes
app.use('/users',UserRoute);
//server created 
app.listen(port,()=>{
    console.log(`Server Run on ${port} port`)
})