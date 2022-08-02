import { Router } from "express";
import bidsRouter from "./bidsRouter.js";

const router = Router();

router.use(bidsRouter);

export default router;