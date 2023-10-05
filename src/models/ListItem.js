const mongoose = require("mongoose");

const listItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
  username: String,
});

module.exports = mongoose.model("list_item", listItemSchema);
