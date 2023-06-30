import userRegData from "../models/userModel.js";
import bcrypt from 'bcrypt'

export const welcomeApi = async(req,res)=>{
    return res.status(200).send("hello")

}
export const addNewUser=async(req,res)=>{
    try {
        let alreadyOne=await userRegData.findOne({email:req.body.email})
        if(alreadyOne){
            return res.status(400).json({status:false,error:"user email already exist!!"})
        }

        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt)

        const newUser=await userRegData.create({
            username:req.body.username,
            email:req.body.email,
            password:secPass
        })

        res.status(200).json({status:true})
    } catch (error) {
        res.status(500).json({status:false,error:error.message})   
    }
}

export const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    try {
        let user=await userRegData.findOne({email:email})

        if(!user){
            return res.status(400).json({status:false,error:"User doesn't exist"})
        }
        // const uname=user.username;

        const passwordCompare=await bcrypt.compare(password,user.password);

        if(!passwordCompare){
            return res.status(400).json({status:false,error:"Incorrect Credentials"});
        }

        res.json({userid:user._id,uname:user.username,status:true});
        
    } catch (error) {
        res.status(500).json({status:false,error:error.message})    
    }
}

export const getUserData=async(req,res)=>{
    try {
        
        const userId = req.params.id;
        const user=await userRegData.findById(userId).select("-password"); 
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({error:"Backend Error!"})    
    }
}
