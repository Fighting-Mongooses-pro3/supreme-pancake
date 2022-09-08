import mongoose, { Schema, model } from "mongoose";

const blurbSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    maxLength: 36,
    match: [
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
      "Must provide a UUID",
    ],
  },
  header: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
  },
});

const Blurb = mongoose.models.Blurb || model("Blurb", blurbSchema);

export default Blurb;
