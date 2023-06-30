import mongoose from "mongoose";

const userTickets = mongoose.Schema({
    userId:String,
    source:String,
    destination:String,
    price:Number,
    date:Date,
    plane:String,
    trip:String,
    seats:Number
})

const ticketSold = mongoose.model('ticketSold',userTickets)
export default ticketSold