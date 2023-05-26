import express from "express";
import Publisher from "../models/publisherModel.js";
const router = express.Router();

router.post("/publisher", async (req, res) => {
  try {
    const {
      name,
      lastName,
      gender,
      hope,
      elder,
      ministerialServant,
      regularPionner,
    } = req.body;

    const publisher = new Publisher({
      name,
      lastName,
      gender,
      hope,
      elder,
      ministerialServant,
      regularPionner,
    });
    await publisher.save();
    res.status(201).json({ message: "Publisher created successfully!" });
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

router.get("/allpublishers", async (req, res) => {
  try {
    const publishers = await Publisher.find({})
    const names = publishers.map(item => item.name)
    res.json(names)
  } catch (error) {
    console.log(error)
  }
})

export default router;
