require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.js");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", authRoute);
app.get("/", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("server start ", process.env.PORT);
});
