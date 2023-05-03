const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            required: [true, 'Project Title is required']
        },
        description: {
            type: String,
            required: [true, 'Project Description is required']
        },
        skills: {
            type: String,
            required: [true, 'Project Skills is required']
        },
        githubURL: {
            type: String,
            required: [true, 'Project githubURL is required']
        },
        hostedLink: {
            type: String
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;