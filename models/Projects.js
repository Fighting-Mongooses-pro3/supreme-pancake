import mongoose, { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the Project"],
    maxLength: [100, "Title can not be longer than 100 characters"],
  },
  img: {
    type: String,
    required: [true, "Please link an image for your blog post from imgur"],
    maxLength: [
      100,
      "Please keep your img source under 100 characters, use imgur!",
    ],
  },
  userName: {
    type: String,
    required: [true, "Please provide your name"],
    MaxLength: [60, "Name can not be longer than 60 characters"],
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  userEmail: String,
  monsters: [
    {
      name: String,
      body: String,
      stats: String,
    },
  ],
});

const Project = mongoose.models.Project || model("Project", projectSchema);

export default Project;
