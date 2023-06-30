import ticketSold from "../models/userTickets.js";
import tickets from "../models/AdminTickets.js";

export const addAdminTicket=async(req,res)=>{
    try {
        const newTicket = await tickets.create({
            source:req.body.source,
            destination:req.body.destination,
            price:req.body.price,
            date:req.body.date,
            plane:req.body.plane,
            trip:req.body.trip,
            seats:req.body.seats
        })
        res.status(201).json(newTicket)
    } catch (error) {
        res.status(500).json({status:false,error:error.message})
    }
}

export const deleteTicket=async(req,res)=>{
    try {
        const ticket= await tickets.findByIdAndDelete(req.params.id)
        res.status(201).json({msg:"ticket deleted"})
    } catch (error) {
       return res.status(500).json({error:error.message})
        
    }
}

export const buyTicket=async(req,res)=>{
    try {
        const buy=await ticketSold.create({
            userId:req.params.id,
            source:req.body.source,
            destination:req.body.destination,
            price:req.body.price,
            date:req.body.date,
            plane:req.body.plane,
            trip:req.body.trip,
            seats:req.body.seats
        })
        res.status(200).json(buy);

    } catch (error) {
        res.status(500).json({status:false,error:error.message})
    }
}

export const showAllTickets=async(req,res)=>{
    try {
        const allTickets = await tickets.find();
        res.status(200).json(allTickets)
    } catch (error) {
        res.status(500).json({status:false,error:error.message})
    }
}

export const showUserTickets=async(req,res)=>{
    try {
        const userId = req.params.id;
        const userBoughtTickets = await ticketSold.find({userId:userId})
        res.status(200).json(userBoughtTickets) 
    } catch (error) {
        res.status(500).json({status:false,error:error.message})
    }
}