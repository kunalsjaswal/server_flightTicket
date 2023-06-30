import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const userRegData = mongoose.model('NewRegData',userSchema)
export default userRegData