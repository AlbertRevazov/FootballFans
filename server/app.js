require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.js");
const newsRoute = require("./routes/news.js");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", authRoute);
app.use("/news", newsRoute);

app.listen(process.env.PORT, () => {
  console.log("server start ", process.env.PORT);
});
