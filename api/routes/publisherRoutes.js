import express from "express";
import Publisher from "../models/publisherModel.js";
import { postPublisher } from "../controllers/index.js";

const router = express.Router();

router.post("/publisher", postPublisher);

router.get("/allpublishers", async (req, res) => {
  try {
    const publishers = await Publisher.find({});
    const names = publishers.map((item) => item.name);
    res.json(names);
  } catch (error) {
    console.log(error);
  }
});

export default router;
