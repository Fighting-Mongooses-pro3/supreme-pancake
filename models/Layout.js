import mongoose, { Schema, model } from "mongoose";

const layoutSchema = new Schema({
  id: { type: String, required: true, maxLength: 36 },
  elements: [
    {
      id: { type: String, required: true, maxLength: 36 },
      type: { type: String, required: true, maxLength: 15 },
    },
  ],
});

const Layout = mongoose.models.Layout || model("Layout", layoutSchema);

export default Layout;
