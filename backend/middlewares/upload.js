const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now);
    },
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|jpeg|png)/)) {
            cb(null, true);
        } else {
            cb(new Error("Only .jpeg, .jpg, .png image format allowed"), false);
        }
    }
}).array("files");

module.exports = upload