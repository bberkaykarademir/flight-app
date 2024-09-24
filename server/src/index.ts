import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import externalFlightRoutes from "./routes/externalFlightRoutes";
import flightsRoutes from "./routes/flightsRoutes";
import myFlightsRoutes from "./routes/myFlightsRoutes";

/* CONFIGURATIONS */
dotenv.config();
export const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/external", externalFlightRoutes); // http://localhost:8000/external
app.use("/flights", flightsRoutes); // http://localhost:8000/flights
app.use("/my-flights", myFlightsRoutes); // http://localhost:8000/myflights

/* SERVER */

app.get("/health", (req, res) => {
  res.send("Server is running.");
});

const port = Number(process.env.PORT) || 8001;
const dbUri = process.env.MONGO_URI as string;

if (!dbUri) {
  console.error("MONGO_URI environment variable is not defined");
  process.exit(1);
}

mongoose
  .connect(dbUri)
  .then(async () => {
    app.listen(port, "0.0.0.0", () => console.log(`Server Port: ${port}`));
  })
  .catch((error) => {
    console.log(`${error} - Database connection failed`);
    process.exit(1);
  });
