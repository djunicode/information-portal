const express = require('express');
const verifyjwt = require('../middlewares/auth');

const {addInternship,
       viewInternships,
       updateInternship,
       deleteInternship} = require('../controllers/internship.controller');

const router = new express.Router();

router.post('/', verifyjwt, addInternship);
router.get('/', verifyjwt, viewInternships);
router.put('/:id', verifyjwt, updateInternship);
router.delete('/:id', verifyjwt, deleteInternship);

module.exports = router;

