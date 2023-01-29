require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.js");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", authRoute);

app.listen(process.env.PORT, () => {
  console.log("server start ", process.env.PORT);
});
