import express from 'express'
import { sendQuery } from '../controllers/queryController.js';

const queryRouter = express.Router();

queryRouter.post("/send",sendQuery);

export default queryRouter;