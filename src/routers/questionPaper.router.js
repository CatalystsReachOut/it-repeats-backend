import { Router } from 'express';
import { saveQuestionPaper } from '../controllers/questionPaper.controller'

const questionPaperRouter = Router();

questionPaperRouter.route('/save-details').post(saveQuestionPaper);

export default questionPaperRouter;