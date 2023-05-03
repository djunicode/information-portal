const {
    addGrade,
    getGrades,
    getGrade,
    updateGrade,
    deleteGrade
} = require('../controllers/gradeCtrl');
const { upload } = require('../middlewares/multer_single');

// Initializing router
const express = require('express');
const router = express.Router();

//Testing Route
router.get('/', (req, res) => {
    console.log('Grades Route');
    res.send('Grades Route');
});

router.post(
    '/add',
    upload.fields([
        { name: 'file1', maxCount: 1 },
        { name: 'file2', maxCount: 1 },
        { name: 'file3', maxCount: 1 },
        { name: 'file4', maxCount: 1 },
        { name: 'file5', maxCount: 1 },
        { name: 'file6', maxCount: 1 },
        { name: 'file7', maxCount: 1 },
        { name: 'file8', maxCount: 1 }
    ]),
    addGrade
);
router.put(
    '/:id',
    upload.fields([
        { name: 'file1', maxCount: 1 },
        { name: 'file2', maxCount: 1 },
        { name: 'file3', maxCount: 1 },
        { name: 'file4', maxCount: 1 },
        { name: 'file5', maxCount: 1 },
        { name: 'file6', maxCount: 1 },
        { name: 'file7', maxCount: 1 },
        { name: 'file8', maxCount: 1 }
    ]),
    updateGrade
);
router.get('/all', getGrades);
router.get('/:id', getGrade);
router.delete('/:id', deleteGrade);

module.exports = router;
