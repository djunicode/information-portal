const Committee = require('../models/committee.model');

//ADD
const addCommittee = async (req, res) => {
    try {
        req.body.user_id = req.user._id;
        let committee = new Committee(req.body);
        await committee.save();
        res.status(200).send({ message: 'New Committee Added!', status: 'successful' });
    } catch (error) {
        res.status(400).send({ message: error.message, status: 'failed' });
    }
};

//VIEW
const viewCommittees = async (req, res) => {
    try {
        const committees = await Committee.find({ user_id: req.user._id });
        if (!committees) {
            res.status(401).send({ message: 'No Committees present!', status: 'failed' });
        } else {
            res.status(200).send(committees);
        }
    } catch (error) {
        res.status(400).send({ message: error.message, status: 'failed' });
    }
};

//UPDATE
const updateCommittee = async (req, res) => {
    try {
        const id = req.user._id;
        const committee = req.body;
        const committee_id = await Committee.findOne({
            user_id: id,
            committee_name: req.body.committee_name
        });
        const updatedCommittee = await Committee.findByIdAndUpdate(committee_id, committee, {
            new: true
        });
        if (!updatedCommittee) {
            res.status(401).send({ message: 'No Committees present!', status: 'failed' });
        } else {
            res.status(200).send(updatedCommittee);
        }
    } catch (error) {
        res.status(400).send({ message: error.message, status: 'failed' });
    }
};

//DELETE
const deleteCommittee = async (req, res) => {
    try {
        const committee_id = await Committee.findOne(
            { user_id: req.user._id, committee_name: req.params.name },
            { _id: 1 }
        );
        await Committee.deleteOne({ _id: committee_id });
        res.status(200).send({ message: 'Committee deleted successfully!', status: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message, status: 'failed' });
    }
};

module.exports = { addCommittee, viewCommittees, updateCommittee, deleteCommittee };