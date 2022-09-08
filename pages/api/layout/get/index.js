import connectMongo from "../../../../utils/connectMongo";
import {Layout} from "../../../../models"
import mongoose from "mongoose"

export default async function handler(req, res) {
  console.log("CONNECTING TO MONGO");
  await connectMongo();
  console.log("CONNECTED TO MONGO");

  const layouts = await Layout.find({});
  res.status(200).json(layouts)
}