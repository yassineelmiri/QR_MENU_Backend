const express = require("express");
const db = require("./models");
const path = require("path");
require("dotenv").config();

// db connection
require("./database/connection");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/users", require("./routes/users"));
app.use("/menu", require("./routes/menu"));
app.use("/restaurant", require("./routes/restaurant"));


db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});