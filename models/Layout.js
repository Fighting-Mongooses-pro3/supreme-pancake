import mongoose, { Schema, model } from "mongoose";

const layoutSchema = new Schema({
  id: { type: String, required: true, maxLength: 36 },
  uuid: {
    type: String,
    required: true,
    maxLength: 36,
    match: [
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
      "Must provide a UUID",
    ],
  },
  elements: [
    {
      uuid: {
        type: String,
        required: true,
        maxLength: 36,
        match: [
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
          "Must provide a UUID",
        ],
      },
      type: { type: String, required: true, maxLength: 15 },
    },
  ],
});

const Layout = mongoose.models.Layout || model("Layout", layoutSchema);

export default Layout;
