import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
import { getUrl } from "./controllers/shortUrl";

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));

app.use("/api", shortUrl);
app.use("/:id", getUrl);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
