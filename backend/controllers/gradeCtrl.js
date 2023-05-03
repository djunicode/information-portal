const Grade = require('../models/grades.model');

const addGrade = async (request, response) => {
    // console.log(request.files);
    const { sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8 } = request.body;
    const sem1_pdf = request.files['file1'][0].originalname;
    const sem2_pdf = request.files['file2'][0].originalname;
    const sem3_pdf = request.files['file3'][0].originalname;
    const sem4_pdf = request.files['file4'][0].originalname;
    const sem5_pdf = request.files['file5'][0].originalname;
    const sem6_pdf = request.files['file6'][0].originalname;
    const sem7_pdf = request.files['file7'][0].originalname;
    const sem8_pdf = request.files['file8'][0].originalname;
    const newGrade = new Grade({
        sem1,
        sem2,
        sem3,
        sem4,
        sem5,
        sem6,
        sem7,
        sem8,
        sem1_pdf,
        sem2_pdf,
        sem3_pdf,
        sem4_pdf,
        sem5_pdf,
        sem6_pdf,
        sem7_pdf,
        sem8_pdf
    });
    try {
        await newGrade.save();
        response
            .status(201)
            // .json({
            //     message: 'Grade created!'
            // })
            .json(newGrade);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const getGrades = async (request, response) => {
    try {
        const grades = await Grade.find({});
        response.status(200).json(grades);
        // .json({
        //     message: 'All Grades fetched!'
        // });
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const getGrade = async (request, response) => {
    try {
        console.log(request.params.id);
        const grade = await Grade.findOne({ _id: request.params.id });
        // const project = await Grade.findById(request.params.id);
        response.status(200).json(grade);
        // .json({
        //     message: 'Single Grade fetched!'
        // });
        console.log(grade);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const updateGrade = async (request, response) => {
    console.log('heyyyyyyyyyyyyyyyyyyyy');
    const { id } = request.params;
    console.log(id);
    console.log(JSON.stringify(request.files));
    console.log('files', request.files);
    // console.log(request.files['file1'][0].originalname);
    const { sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8 } = request.body;
    const sem1_pdf = request.files['file1'][0].originalname;
    const sem2_pdf = request.files['file2'][0].originalname;
    const sem3_pdf = request.files['file3'][0].originalname;
    const sem4_pdf = request.files['file4'][0].originalname;
    const sem5_pdf = request.files['file5'][0].originalname;
    const sem6_pdf = request.files['file6'][0].originalname;
    const sem7_pdf = request.files['file7'][0].originalname;
    const sem8_pdf = request.files['file8'][0].originalname;
    try {
        const grade = await Grade.findByIdAndUpdate(
            id,
            {
                sem1: sem1,
                sem2: sem2,
                sem3: sem3,
                sem4: sem4,
                sem5: sem5,
                sem6: sem6,
                sem7: sem7,
                sem8: sem8,
                sem1_pdf: sem1_pdf,
                sem2_pdf: sem2_pdf,
                sem3_pdf: sem3_pdf,
                sem4_pdf: sem4_pdf,
                sem5_pdf: sem5_pdf,
                sem6_pdf: sem6_pdf,
                sem7_pdf: sem7_pdf,
                sem8_pdf: sem8_pdf
            },
            { new: true }
        );
        response.status(200).json(grade);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

const deleteGrade = async (request, response) => {
    try {
        await Grade.deleteOne({ _id: request.params.id });
        response.status(201).json({ message: 'Grade deleted successfully' });
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
};

module.exports = { addGrade, getGrades, getGrade, updateGrade, deleteGrade };
