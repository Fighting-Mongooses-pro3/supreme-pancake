import connectMongo from "../../../../utils/connectMongo";
import {Layout} from "../../../../models"
import mongoose from "mongoose"

export default async function handler(req, res) {
  try{
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    let newLayout = await Layout.create(req.body)
    
    if(!newLayout) return res.status(400).json("error creating layout")

    res.status(200).json("layout created")
  }catch{
    res.status(400).json("error making layout")
  }
}