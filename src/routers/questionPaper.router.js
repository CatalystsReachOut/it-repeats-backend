import { Router } from 'express';
import { saveQuestionPaper, getQuestionPaper } from '../controllers/questionPaper.controller'

const questionPaperRouter = Router();

questionPaperRouter.route('/save-details').post(saveQuestionPaper);
questionPaperRouter.route('/').get(getQuestionPaper);

export default questionPaperRouter;