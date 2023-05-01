const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now);
    },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'application/msword'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    }
}).array("files");

module.exports = upload