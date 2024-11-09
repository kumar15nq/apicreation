let express = require("express");

let ser = express();

ser.get("/products", (req, res) => {
  res.send("helooo");
});

ser.listen(3000, () => {
  console.log("listing to the port");
});
