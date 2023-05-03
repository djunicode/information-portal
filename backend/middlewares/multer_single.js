const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Filesss');
    },
    filename: (req, file, cb) => {
        console.log(file);
        console.log('Yeah MULTER');
        // cb(null, Date.now() + path.extname(file.originalname));
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });
module.exports = { upload };
