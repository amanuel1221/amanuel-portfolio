const express = require("express");
const cors = require("cors");
const chatRoute = require("./routes/chatRoute");

const app = express();

const allowedOrigins = [
  "http://localhost:5173", 
  "http://localhost:3000", 
  process.env.CLIENT_URL,  
].filter(Boolean);         

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy error: Origin not allowed."));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Amanuel Portfolio API is running ",
  });
});

app.use("/api/chat", chatRoute);

module.exports = app;