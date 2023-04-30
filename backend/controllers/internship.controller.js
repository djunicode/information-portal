const Internship = require('../models/internship.model');

//add internships
const addInternship = async(req,res)=>{
    try {
        req.body.user_id = req.user._id;
        let internship = new Internship(req.body);
        await internship.save();
        res.status(201).json({message:"Internship added" ,details:internship});
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

//view internships
const viewInternships =  async(req,res)=>{
    try {
        const {status,id} = req.query;
        
        if(id)
        {
            var internships = await Internship.find({_id:id});
        }
        else if(status=='all'|| !status)
        {
            var internships = await Internship.find({user_id:req.user._id});          
        }
        else
        {           
            var internships = await Internship.find({user_id:req.user._id ,status:status });
        }
        if(!internships)
        {
            res.status(501).json({message:"No internships found" , status:"failed"});
        }
        else
        {            
            res.status(201).send(internships);
        }

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}


//update internships
const updateInternship = async(req,res)=>{
    try {        
        const id = req.params.id;        
        const updated_internship = await Internship.findByIdAndUpdate(id , req.body, {new:true});        
        if(!updated_internship)
        {
            res.status(401).json({message:"Error in updation"});
        }
        else
        {
            res.status(200).json({message:"Update Successfull" ,updated_internship});
        }
        
    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

const deleteInternship = async(req,res)=>{
    try {
        await Internship.deleteOne({_id:req.params.id});
        res.status(200).send({message:"Internship data deleted"});

    } catch (error) {
        res.status(500).json({message:error.message , task_status:"failed"});
    }
}

module.exports={addInternship ,viewInternships , updateInternship, deleteInternship}