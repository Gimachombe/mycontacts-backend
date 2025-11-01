const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please add the conatact name"],
  },
  email: {
    type: email,
    require: [true, "Please add the contact email address"]
  },
  phone: {
    type: Number,
    require: [true, "Please add the contact phone"]
  },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);