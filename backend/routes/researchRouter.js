const express = require('express');
const verifyjwt = require('../middlewares/auth');

const {addResearchWork,
       viewResearchWork,
       updateResearchWork,
       deleteResearchWork} = require('../controllers/research.controller');

const router = new express.Router();

router.post('/', verifyjwt, addResearchWork);
router.get('/', verifyjwt, viewResearchWork);
router.put('/:id', verifyjwt, updateResearchWork);
router.delete('/:id', verifyjwt, deleteResearchWork);

module.exports = router;