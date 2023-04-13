const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        },
        githubURL: {
            type: String,
            required: true
        },
        hostedLink: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;