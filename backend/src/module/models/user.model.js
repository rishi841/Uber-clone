import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:[true,'name is required'],
        trim:true,
        minlentgh:[2,'name must be atleast 2 character'],
        maxlentgh:[20,"name can not be acceded 20 character"]
    },
    email:{
        type:string,
        required:[true,'email is required'],
        unique:true,
        trim:true
    },
    phone:{
        type:string,
        required:[true,'phone no is required'],
        unique:true,
        trim:true
    },
    password:{
        type:string,
        required:[true,'password is required'],
        minlength:[6,'password must be at least 6 character'],
        select:false
    }
})