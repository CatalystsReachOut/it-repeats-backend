import { Router } from 'express';
import questionPaperRouter from './questionPaper.router';

const router = Router();

router.use('/question-paper', questionPaperRouter);

export default router;