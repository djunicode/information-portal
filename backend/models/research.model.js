const mongoose = require('mongoose');

const dateRequired = (doc)=>{
    return doc.status==="published";
}

const ResearchSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String,
            required: true
        },
        topic_name: {
            type: String,
            required: true
        },
        team_members: [{
            type: String,
            required: true
        }],
        journal_name:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:['pending','published'],
            required:true
        },
        publish_date: {
            
            date:{type:Number,max:31,required:[dateRequired ,'Date required if paper is published']},
            month:{type:String,required:[dateRequired,'Date required if paper is published']},
            year:{type:String,required:[dateRequired,'Date required if paper is published']}
        },
        mentor:{
            type:String,
            required:true
        },
        guide:{
            type:String,
            required:true
        },
        ISBN: {
            type: Number,
            required: true
        },
        ISSN: {
            type: Number,
            required: true
        },
        paper_id:{
            type:String,
            required:true
        },
        link:{
            type:String,
        },        
        LOR: {
            data: Buffer,
            contentType: String,
            originalName: String
        }
    },
    {
        timestamps: true
    }
);


const Research = mongoose.model('Research', ResearchSchema);
module.exports = Research;