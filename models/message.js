/**
 * Created by jmccommas on 7/3/17.
 */
var monsoose = require('mongoose');
var Schema= mongoose.Schema;
var schema = new Schema({
	content:{type: String, required: true},
	user:{type:Schema.Types.objectId, ref:'User'}
});
module.exports=mongoose.model('Message',schema);