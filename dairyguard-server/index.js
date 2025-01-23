const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// const crypto = require('crypto');
// const randomHex = crypto.randomBytes(64).toString('hex');
// console.log(randomHex);

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ryrk.mongodb.net/demo-dairyguard?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(console.log("MongoDB connected Successfully!"))
  .catch((error) => console.log("Error connecting to Mongodb", error));

// jwt authentication
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
  res.send({ token });
});


//   import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
