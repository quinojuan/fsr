import Publisher from "../models/publisherModel.js"; // la extensión JS de este archivo me volvió loco

export const postPublisher = async (req, res) => {
    try {
      const {
        name,
        lastName,
        gender,
        group,
        hope,
        elder,
        ministerialServant,
        regularPionner,
      } = req.body;
  
      const publisher = new Publisher({
        name,
        lastName,
        gender,
        group,
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
  }