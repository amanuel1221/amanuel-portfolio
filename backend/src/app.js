const express = require("express");
const cors = require("cors");
const chatRoute = require("./routes/chatRoute");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Amanuel Portfolio API is running "
  });

});
app.use("/api/chat", chatRoute);


module.exports = app;