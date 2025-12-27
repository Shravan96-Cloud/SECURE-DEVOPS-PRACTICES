const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.name; // intentionally unsafe input
  res.send("Hello " + name);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
