import express from 'express';
import { addComputer, listComputer, removeComputer } from '../controllers/computerController.js';
import multer from 'multer';
const computerRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

computerRouter.get("/list",listComputer);
computerRouter.post("/add",upload.single('image'),addComputer);
computerRouter.post("/remove",removeComputer);

export default computerRouter;