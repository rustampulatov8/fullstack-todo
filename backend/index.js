const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todos = require("./routes/todos");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",           
      "https://mytodorep.vercel.app",    
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(bodyParser.json());

app.use("/api/todos", todos);

const port = process.env.PORT || 4000;

if (require.main === module) {
  app.listen(port, () => console.log(`✅ Backend listening on ${port}`));
}

module.exports = app;
