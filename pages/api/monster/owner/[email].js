import Monster from "../../../../models/Monster";
import mongoose from "mongoose";
import connectMongo from "../../../../utils/connectMongo";

export default async function handler(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    const { email } = req.query;
    console.log(email);
    const monster = await Monster.findOne({ owner: email });

    if (!monster) return res.status(404).json("no monsters found");

    res.status(200).json(monster);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
