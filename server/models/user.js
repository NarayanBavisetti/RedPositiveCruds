const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    hobbies:{
        type:String,
        require:true
    }
})

const user  = mongoose.model("RPC-users", userSchema);
module.exports = user;
