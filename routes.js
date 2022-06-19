const express = require("express");
const passangerModel = require("./models");
const app = express();

app.get("/passangers", async (request, response) => {
    const Passangers = await passangerModel.find({});
    console.log(Passangers)
    try {
      response.send(Passangers);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;
