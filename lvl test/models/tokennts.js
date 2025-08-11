const mongoose = require("mongoose");

const doss = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  botTokens: [{ type: String }],
});

module.exports = mongoose.model("doss", doss);