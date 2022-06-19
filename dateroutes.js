const express = require("express");
const  datedataModel = require("./datemodels");
const app = express();

app.get("/datedatas", async (request, response) => {
    const Datakeys = await datedataModel.find({});
    console.log(Datakeys)
    try {
      response.send( Datakeys );
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;
