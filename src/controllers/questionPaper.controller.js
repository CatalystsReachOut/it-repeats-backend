import QuestionPaper from '../models/questionPaper.model.js';

const saveQuestionPaper = async (req, res) => {
    console.log("Hello");
    let questionPaper = new QuestionPaper(req.body.departmentName, req.body.semester, req.body.subjectName, req.body.year, req.body.examName, req.body.fileUrl);
    let returnValue = await questionPaper.save();
    if (returnValue) {
        res.status(201).send({
            'message': 'Saved!',
            'error': false
        });
    } else {
        res.status(201).send({
            'message': 'Saved!',
            'error': true
        });
        console.log("Hello")
        }
}


const getQuestionPaper = async (req, res) => {
    
    let questionPaper = new QuestionPaper();
    let returnValue = await questionPaper.find();
    if (returnValue) {
        res.status(201).send({
            'message': 'Saved!',
            'error': false,
            returnValue
        });
    } else {
        res.status(201).send({
            'message': 'Saved!',
            'error': true
        });
        console.log("Hello")
        }
}

export { saveQuestionPaper, getQuestionPaper};