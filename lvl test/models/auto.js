const {model , Schema} = require ('mongoose')
const autow = new Schema({
    id : {type : String , required: true} ,
    token : {type : String  , required: true} ,
   
})
module.exports = model('autow' , autow)