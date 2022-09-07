import mongoose, { Schema, model } from "mongoose";

const blurbSchema = new Schema({
  id: { type: String, required: true, maxLength: 36 },
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
