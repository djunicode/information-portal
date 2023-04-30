const express = require('express');
const verifyjwt = require('../middlewares/auth');
const {
    addCommittee,
    viewCommittees,
    updateCommittee,
    deleteCommittee
} = require('../controllers/committee.controller');
const router = express.Router();

router.post('/add', verifyjwt, addCommittee);
router.get('/view', verifyjwt, viewCommittees);
router.put('/update', verifyjwt, updateCommittee);
router.delete('/delete/:name', verifyjwt, deleteCommittee);

module.exports = router;
