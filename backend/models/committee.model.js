const mongoose = require('mongoose');

const committeeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    committee_name: {
        type: String,
        unique: true,
        required: true
    },
    logo: {
        data: Buffer,
        contentType: String,
        required: true
    },
    roles: [
        {
            position: {
                type: String,
                required: true
            },
            contribution: {
                type: String
            },
            duration: {
                type: String,
                require: true
            }
        }
    ],
    certificate: {
        data: Buffer,
        contentType: String,
        originalName: String
    }
});

const Committee = mongoose.model('Committee', committeeSchema);
module.exports = Committee;