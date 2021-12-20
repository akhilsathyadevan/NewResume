const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyResume');//'mongodb://localhost:27017/MyLibraryMain'

const schema = mongoose.Schema;

const SignupSchema = new schema({
    username:String,
    email_ID:String,
    gender:String,
    phone:Number,
    password:String
});

var sign_data = mongoose.model('signup_datas',SignupSchema);
module.exports = sign_data;