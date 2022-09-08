import Monster from "../../models/Monster";
import mongoose from "mongoose";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    console.log(id);
    const monster = await Monster.findOne({ _id: id });

    if (!monster) return res.status(404).json("no monsters found");

    res.status(200).json(monster);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}
