require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoded = jwt.verify(token, "efdfdsgfdff6gdfg77fdgdfg");
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.json({
        message: "У вас нет доступа.",
      });
    }
  } else {
    return res.json({
      message: "У вас нет доступа.",
    });
  }
};
module.exports = checkAuth;
