const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    roomId: String,
    username: String,
    message: String,
  },
  { timestamps: true },
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
