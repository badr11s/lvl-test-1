const { Schema, model } = require("mongoose");

const voicew = new Schema (
  {
    id: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },

  }
)
module.exports = model ('voicew' , voicew)