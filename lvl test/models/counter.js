const { Schema, model } = require("mongoose");
const counterq = new  Schema({
  id: { type: String},
  count : {type : Number}
 

});

module.exports = model("counterq",counterq)