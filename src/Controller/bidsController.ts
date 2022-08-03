import { Request, Response } from "express";
import * as bidsServices from "../Services/bidsServices.js";

export async function getAllBids(req: Request, res: Response) {
  const bids = await bidsServices.getBids();

  res.send(bids).status(200);
}