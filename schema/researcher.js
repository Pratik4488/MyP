const mongoose = require("mongoose")

const researcherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 10,
      default:"admin123"
    },
    name: {
      type: String,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone:{
        type:Number,
        required: true,
        unique: true,
        default: 6206508473,
    },
    organisation:{
        type: String,
        default: ""
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    gender: {
      type: String,
      required: true,
      default: "Male"
    },
    profileImage: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    otherLinks: {
      type: Array,
      default: [],
    },
    studyHistory: {
      type: Array,
      default: [],
    },
    language: {
      type: Array,
      default: [],
    },
    expertise:{
      type:String,
      default:"",
    },
    Rating:{
      type:String,
      default:"0.00",
    }
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", researcherSchema)
