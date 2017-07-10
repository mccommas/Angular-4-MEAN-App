/**
 * Created by jmccommas on 7/3/17.
 */

 
var monsoose = require('mongoose');
var Schema= mongoose.Schema;
var mongooseUniqueValidator= require('mongoose-unique-validator');
var schema = new Schema({
	firstName:{type: String, required:true},
	password:{type: String, required:true},
	email:{type: String, required:true, unique:true},
	messages:[{type: Schema.Types.ObjectId,ref:'Message'}]
});
module.exports=mongoose.model('User',schema);
schema.plugin(mongooseUniqueValidator);