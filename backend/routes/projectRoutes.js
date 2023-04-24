const Project = require("../models/project.model");
const {
    addProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} = require('../controllers/projectCtrl');

// Initializing router
const express = require('express');
const router = express.Router();


//Testing Route
router.get('/', (req, res) => {
    console.log('Project Route');
    res.send('Project Route');
});

router.post("/add", addProject);
router.get("/all", getProjects);
router.get("/:id", getProject);
router.put('/:id', updateProject);
router.delete("/:id", deleteProject);

module.exports = router;