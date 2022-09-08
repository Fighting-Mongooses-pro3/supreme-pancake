import connectMongo from "../../../../utils/connectMongo";
import {Monster} from "../../../../models/"
import mongoose from "mongoose"

export default async function handler(req, res) {
  try{
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    let newMonster = await Monster.create(req.body)
    
    if(!newMonster) return res.status(400).json("error creating monster")

    res.status(200).json("monster created")
  }catch{
    res.status(400).json("error making monster")
  }
}