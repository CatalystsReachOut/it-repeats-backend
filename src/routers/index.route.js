// import { Router } from 'express';
import express from "express";
const router = express.Router();
import { saveQuestionPaper,getQuestionPaper,deleteQp} from '../controllers/questionPaper.controller.js'
import multer from "multer"

     const storage=  multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./uploads");
          },
          filename: (req, file, cb) => {
            cb(null, file.originalname);
          },
    })
    const upload= multer({storage:storage});
router.route("/save-details").post(upload.single("image"),saveQuestionPaper);
router.route('/get-details').get(getQuestionPaper);
router.route('/delete').delete(deleteQp);
export default router;

