const {
    addProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} = require('../controllers/projectCtrl');
const {upload} = require('../middlewares/multer_single');

// Initializing router
const express = require('express');
const router = express.Router();

//Testing Route
router.get('/', (req, res) => {
    console.log('Project Route');
    res.send('Project Route');
});

router.post('/add', upload.single('file'), addProject);
router.get("/all", getProjects);
router.get("/:id", getProject);
router.put('/:id', updateProject);
router.delete("/:id", deleteProject);

module.exports = router;