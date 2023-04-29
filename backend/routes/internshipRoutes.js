const express = require('express');
const verifyjwt = require('../middlewares/auth');

const {addInternship,
       viewInternships,
       viewInternships_id,
       updateInternship,
       deleteInternship} = require('../controllers/internship.controller');

const router = new express.Router();

router.post('/add', verifyjwt, addInternship);
router.get('/view/:filter', verifyjwt, viewInternships);
router.get('/viewbyid/:id' , verifyjwt , viewInternships_id);
router.put('/update/:id', verifyjwt, updateInternship);
router.delete('/delete/:id', verifyjwt, deleteInternship);

module.exports = router;

