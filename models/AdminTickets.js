import mongoose from "mongoose";

const adminTickets = mongoose.Schema({
    source:String,
    destination:String,
    price:Number,
    date:Date,
    plane:String,
    trip:String,
    seats:Number
})

const tickets = mongoose.model('TicketMarket',adminTickets)
export default tickets