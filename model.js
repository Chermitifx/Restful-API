var mongoose = require("mongoose")

var BookSchema = new mongoose.Schema({
    title : {
      type : String,
      require :[true, "Please enter a valid title."],
    },
    author : {
      type : String,
      require :[true, "Please enter a valid name."],
    },
    publishedDate : {
      type : Date,
      require :[true, "Please enter a valid date."],
    },   
    pages : {
      type : Number,
      require :[true, "Please enter a valid pages number."],
    },
    genre : {
      type : String
    }
})

var book = new mongoose.model("book",BookSchema)
module.exports = book