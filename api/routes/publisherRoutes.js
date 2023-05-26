import express from "express";
import Publisher from "../models/publisherModel.js";
import { getAllPublishers, postPublisher, updatePublisher } from "../controllers/index.js";

const router = express.Router();

router.post("/", postPublisher);
router.get("/allpublishers", getAllPublishers);
router.put("/update/:id", updatePublisher);

export default router;
