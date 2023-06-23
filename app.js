const express = require("express");

const app = express();

const path = require("path");

const port = 6001;

const db = require("./Model/index");

const controller = require("./Controller/noteController");

app.set("view engine", "ejs");

require("./Config/dbConfig");

db.sequelize.sync({ force: false });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Node server started at port 6100");
});

app.get("/", controller.renderHome);

app.post("/createNote", controller.createNote);

app.get("/deleteNote/:id", controller.deleteNote);

app.get("/editNote/:id", controller.fetchNote);

app.post("/updateNote/:id", controller.updateNote);
