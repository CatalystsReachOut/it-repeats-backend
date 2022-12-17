import { Router } from 'express';
import { saveQuestionPaper } from '../controllers/questionPaper.controller'

const questionPaperRouter = Router();

questionPaperRouter.route('/save-details').post(saveQuestionPaper);
questionPaperRouter.route('/save-details').post(getQuestionPaper);


export default questionPaperRouter;