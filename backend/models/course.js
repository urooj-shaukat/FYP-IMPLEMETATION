var mongoose = require("mongoose");
var Teacher = require("./teacher");
var Student = require("./student");
var  CourseSchema = mongoose.Schema({
CourseCode:{
    type: String,
    required : true
},
Name:{
    type: String,
    required : true
},
Description:{
    type: String
},
CreditHours:{
    type: Number
},
Language:{
    type: String,
    required : true
},
StartingDate:{
    type: Date,
    required : true,
    default: Date.now()
},
EndingDate:{
    type: Date,
    required : true
},
Image:{
    type: Buffer
},
CourseContent: {
    type: [
      {
        LecNo:{
            type:Number,
            required: true
        },
        title: {
          type: String,
          required: true,
        },
        file: {
          type: Buffer,
        },
        uploadedDate: {
          type: Date,
        },
      },
    ],
  },
Teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
},
Students:{
     type: [
          {
            studentID: {
              type: mongoose.Types.ObjectId,
              ref: "Student",
            }
          }
        ]
}
})
module.exports = mongoose.model("Course", CourseSchema);