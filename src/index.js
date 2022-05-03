require('module-alias/register')
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const tasksRoute = require("./routes/tasksRoute");

const app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
    error: false,
  });
});

app.use("/tasks", tasksRoute);

app.listen(PORT, () => {
  console.log("Server is up and running at PORT: ", PORT);
});
