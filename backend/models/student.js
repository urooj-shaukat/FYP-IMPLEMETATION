var mongoose = require("mongoose");
var  StudentSchema = mongoose.Schema({
Email:{
    type: String,
    required : true,
    unique:true
},
PhoneNum:{
    type: Number,
    required : true
},
ProfilePic:{
    type: Buffer
},
Course:{
    type: [
      {
        courseID: {
          type: mongoose.Types.ObjectId,
          ref: "Course",
        }
      }
    ]
}
})
module.exports = mongoose.model("Student", StudentSchema);