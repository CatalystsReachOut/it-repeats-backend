import QuestionPaper from '../models/questionPaper.model.js';

const saveQuestionPaper = async (req, res) => {
    let questionPaper = new QuestionPaper(req.body.medicineAddress, req.body.description, req.body.quantity, req.body.rawMaterialAddress);
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
    }
}

export { saveQuestionPaper };