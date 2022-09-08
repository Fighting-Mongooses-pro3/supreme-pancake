import connectMongo from "../../../../utils/connectMongo";
import {Blurb} from "../../../../models"
import mongoose from "mongoose"

export default async function handler(req, res) {
  try{
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    let newBlurb = await Blurb.create(req.body)
    
    if(!newBlurb) return res.status(400).json("error creating blurb")

    res.status(200).json("blurb created")
  }catch{
    res.status(400).json("error making blurb")
  }
}