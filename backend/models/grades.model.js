const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema(
    {
        sem1: {
            type: String
        },
        sem1_pdf: {
            type: String
        },
        sem2: {
            type: String
        },
        sem2_pdf: {
            type: String
        },
        sem3: {
            type: String
        },
        sem3_pdf: {
            type: String
        },
        sem4: {
            type: String
        },
        sem4_pdf: {
            type: String
        },
        sem5: {
            type: String
        },
        sem5_pdf: {
            type: String
        },
        sem6: {
            type: String
        },
        sem6_pdf: {
            type: String
        },
        sem7: {
            type: String
        },
        sem7_pdf: {
            type: String
        },
        sem8: {
            type: String
        },
        sem8_pdf: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade;
