const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    message:{
        type:String
    },
    createdAt:{
        type:Date
    }
},{timestamps:true})


const Chat = mongoose.model("Chat",chatSchema)

module.exports = Chat;