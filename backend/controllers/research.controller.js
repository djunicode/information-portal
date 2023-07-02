const Research = require('../models/research.model');

//add research_work
const addResearchWork = async(req,res)=>{
    try {
        req.body.user_id = req.user._id;
        let research = new Research(req.body);
        await research.save();
        res.status(201).json({message:"research work added" ,details:research});
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

//view research_work
const viewResearchWork =  async(req,res)=>{
    try {
        const {status,id} = req.query;
        
        if(id)
        {
            var research_data = await Research.find({_id:id});
        }
        else if(status=='all'|| !status)
        {
            var research_data = await Research.find({user_id:req.user._id});          
        }
        else
        {           
            var research_data = await Research.find({user_id:req.user._id ,status:status });
        }
        if(!research_data)
        {
            res.status(501).json({message:"No researchs found" , status:"failed"});
        }
        else
        {            
            res.status(201).json({research_data:research_data});
        }

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

//update researchs
const updateResearchWork = async(req,res)=>{
    try {        
        const id = req.params.id;
        console.log(id)
        const updated_research = await Research.findByIdAndUpdate(id , req.body, {new:true});
        console.log(updated_research);        
        if(!updated_research)
        {
            res.status(401).json({message:"Error in updation"});
        }
        else
        {
            res.status(200).json({message:"Update Successfull" ,updated_research});
        }
        
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const deleteResearchWork = async(req,res)=>{
    try {
        await Research.deleteOne({_id:req.params.id});
        res.status(200).send({message:"research data deleted"});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={addResearchWork ,viewResearchWork , updateResearchWork, deleteResearchWork}