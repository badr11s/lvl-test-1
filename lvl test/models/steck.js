const { Schema, model } = require("mongoose");
const toto= new  Schema({
  id: { type: String},
  price : {type : Number},
  ownerId : {type : String},
  steck:{ tokens: [String]
  } 
});

module.exports = model("toto",toto)
