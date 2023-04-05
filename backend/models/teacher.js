var mongoose = require("mongoose");
var  TeacherSchema = mongoose.Schema({
Email:{
    type: String,
    required : true,
    unique:true
},
PhoneNum:{
    type: Number,
    required : true
},
Cv:{
    type: Buffer,
    required : true
},
ProfilePic:{
    type: Buffer
}
})
module.exports = mongoose.model("Teacher", TeacherSchema);