import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

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

/* SERVER */

app.get("/health", (req, res) => {
  res.send("Server is running.");
});

const port = process.env.PORT || 8001;
const dbUri = process.env.MONGO_URI as string;

if (!dbUri) {
  console.error("MONGO_URI environment variable is not defined");
  process.exit(1);
}

mongoose
  .connect(dbUri)
  .then(async () => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
  })
  .catch((error) => {
    console.log(`${error} - Database connection failed`);
    process.exit(1);
  });
