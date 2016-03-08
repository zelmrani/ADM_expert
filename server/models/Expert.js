var mongoose = require('mongoose');

// Create the Expert Schema
var ExpertSchema= new mongoose.Schema({
	Name:{
		type:String,
		default: '',
		//required: 'You must add a Name'
	},
	Surname:{
		type:String,
		default: '',
		//required: 'You must add a Surname'
	},
	Email:{
		type:String,
		default: '',
	},
	Phone:{
        type:String,
		//type:Number,
		default: '',
		//required: "You must add the expert's number"
	},
	SGM:{
		type:String,
		default: '',
		//required: 'You must add a '
	},
	Skills:{
		type:String,
		default: '',
		//required: 'You must add at least one skill'
	},
});

//Export the model schema 

//mongoose.model('Expert', ExpertSchema);
module.exports=ExpertSchema;

