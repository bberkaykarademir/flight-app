import { Router, Request, Response } from "express";
import { fetchExternalFlightData } from "../controllers/externalFlightApi";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await fetchExternalFlightData();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
