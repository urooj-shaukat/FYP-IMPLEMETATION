var mongoose = require("mongoose");
var  UserSchema = mongoose.Schema({
FullName:{
    type: String,
    required : true
},
UserName:{
    type: String,
    required : true,
    unique: true
},
UserName:{
    type: String,
    required : true
},
Password:{
    type:String,
    required: true
},
Role:{
    type: String,
    required: true
}
})
module.exports = mongoose.model("User", UserSchema);
