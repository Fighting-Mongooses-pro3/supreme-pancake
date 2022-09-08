import {Layout} from "../../models/Monster";
import mongoose from "mongoose";
import connectMongo from "../../../../utils/connectMongo";
export default async function handler(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
      await connectMongo();
      console.log("CONNECTED TO MONGO");

    const { id } = req.query;
    console.log(id);
    const layout = await Layout.findOne({ _id: id });

    if (!layout) return res.status(404).json("no monsters found");

    res.status(200).json(layout);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}
