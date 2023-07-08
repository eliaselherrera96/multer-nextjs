import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
});

export default mongoose.models.File || mongoose.model("File", fileSchema);
