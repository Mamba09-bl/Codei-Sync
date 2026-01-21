import mongoose from "mongoose";

const codeSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "javascript",
    },
  },
  { timestamps: true },
);

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);

export default Code;
