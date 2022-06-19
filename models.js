const mongoose = require("mongoose");

const PassangerSchema = new mongoose.Schema({
  passangerViews: {
    type: String,
    //required: true,
  },
  numberOfViews: {
    type: Number,
    //default: 0,
  },
});

const Passangers = mongoose.model("Passangers", PassangerSchema);

module.exports = Passangers;
