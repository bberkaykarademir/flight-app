import { Router } from "express";
import { getFlights, bookFlight } from "../controllers/myFlightsController";

const router = Router();

router.get("/", getFlights);
router.post("/", bookFlight);


export default router;
