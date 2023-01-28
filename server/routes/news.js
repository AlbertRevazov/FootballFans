const checkAuth = require("../utils");
const { Router } = require("express");
const router = new Router();

router.get("/", checkAuth, async (req, res) => {
  try {
    console.log("llllll");
  } catch (error) {
    res.json({
      message: "Нет доступа!",
    });
  }
});
module.exports = router;
