const mongoose = require("mongoose");

const DatedataSchema = new mongoose.Schema({
  
  currentDateRange: {
    type: Date
 
  },
  value: {
    type: Number,
    default: 0,
  },


});

const Datedatas = mongoose.model("Datedatas",DatedataSchema);

module.exports = Datedatas;