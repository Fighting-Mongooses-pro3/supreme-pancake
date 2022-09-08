import connectMongo from "../../../../utils/connectMongo";
import {Blurb} from "../../../../models"
import mongoose from "mongoose"

export default async function handler(req, res) {
  console.log("CONNECTING TO MONGO");
  await connectMongo();
  console.log("CONNECTED TO MONGO");

  const blurbs = await Blurb.find({});
  res.status(200).json(blurbs)
}