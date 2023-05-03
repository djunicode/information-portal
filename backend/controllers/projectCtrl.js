const Project = require('../models/project.model');

const addProject = async (request, response) => {
  console.log("add project controller")
    const image = request.file ? request.file.filename : null;
    const {
        title,
        description,
        skills,
        githubURL,
        hostedLink
    } = request.body;
    const newProject = new Project({ title, description, skills, githubURL, hostedLink, image });
    try {
        await newProject.save();
        response
            .status(201)
            // .json({
            //     message: 'Project created!'
            // })
            .json(newProject);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const getProjects = async (request, response) => {
  try {
    const projects = await Project.find({});
    response.status(200).json(projects)
    // .json({
    //     message: 'All Projects fetched!'
    // });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const getProject = async (request, response) => {
  try {
      console.log(request.params.id);
      const project = await Project.findOne({ _id: request.params.id });
      // const project = await Project.findById(request.params.id);
      response.status(200).json(project);
      // .json({
      //     message: 'Single Project fetched!'
      // });
      console.log(project);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const updateProject = async (request, response) => {
    const { id } = request.params;
    const project = request.body;
    // const image = request.file ? request.file.filename : null;
    try {
        const updateProject = await Project.findByIdAndUpdate(id, project, { new: true });
        response.status(201).json(updateProject);
        // .json({
        //     message: 'Project updated!'
        // });
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const deleteProject = async (request, response) => {
    try {
        await Project.deleteOne({ _id: request.params.id });
        response.status(201).json({ message: 'User deleted successfully' });
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

module.exports = { addProject, getProjects, getProject, updateProject, deleteProject };
