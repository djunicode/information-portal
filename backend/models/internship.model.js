const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        company_name: {
            type: String,
            required: true
        },
        position:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:['ongoing','completed','applied'],
            required:true
        },
        duration: {
            start:{
                month:{type:String,required:true},
                year:{type:String, required:true}
            },
            end:{
                month:{type:String},
                year:{type:String}
            }
        },
        hours: {
            completed:{type:Number,required:true},
            total:{type:Number,required:true}
        },
        stipend: {
            type: Number,
            required: true
        },
        certificate: {
            data: Buffer,
            contentType: String,
            originalName: String
        }
    },
    {
        timestamps: true
    }
);

const Internship = mongoose.model('Internship', InternshipSchema);
module.exports = Internship;