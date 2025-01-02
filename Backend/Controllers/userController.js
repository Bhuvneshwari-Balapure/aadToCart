const userModel = require('../models/userModel')


const UserRgistration = async(req,res)=>{

    const { name , email , password } = req.body;
    const User = await userModel.create({
        
        name : name  , 
        email : email ,
        password : password
    })

    console.log("Ok");
    res.send({msg : "Successfully Registered..."})
}
const UserLogin = async(req,res)=>
{
    const { email , password } = req.body;
    const User = await userModel.findOne({email : email});
    if(User){
        if(User.password === password){
            res.send({Data:User , msg : "Login Successfully..."})
        }else{
            res.status(404).send({msg : "Password is Incorrect..."})
        }
    }
    else{
        res.status(404).send({msg : "Invalid Email..."})
    }
}


module.exports= {
    UserRgistration,
    UserLogin
}