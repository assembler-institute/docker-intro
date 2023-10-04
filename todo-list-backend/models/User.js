const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  img: {
    secure_url: { type: String, required: false },
    public_id: { type: String, required: false },
  },
  comesFromFirebase: {
    type: Boolean,
    required: false,
    default: false,
  },
  todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = model("User", UserSchema);
