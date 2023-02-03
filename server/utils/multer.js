const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join("./public/uploads"),
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.jpg`);
  },
});

const upload = multer({ storage });
module.exports = upload;
