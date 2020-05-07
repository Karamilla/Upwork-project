const express = require("express");
const app = express();

const router = require("./routes/curiosity-ad-copy-scripts");

app.use(express.json());

app.set("views", "templates");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/", router);
app.listen(3000);
