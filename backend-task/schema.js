var mongoose=require('mongoose');
  
var UserSchema = new mongoose.Schema({
    Name:String,
    Email:String
});
  
module.exports = mongoose.model(
    'user', UserSchema, 'Users');