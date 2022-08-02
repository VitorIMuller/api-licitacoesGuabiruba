import { Router } from "express";
import { getAllBids } from "../Controller/bidsController.js";

const bidsRouter = Router();

bidsRouter.get("/bids", getAllBids);



export default bidsRouter;