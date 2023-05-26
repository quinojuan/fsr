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
      dateOfBirth,
      dateOfInmersed,
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
      dateOfBirth,
      dateOfInmersed,
      ministerialServant,
      regularPionner,
    });
    await publisher.save();
    res.status(201).json({ message: "Publisher created successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find({});
    res.json(publishers);
  } catch (error) {
    console.log(error);
  }
};

export const updatePublisher = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastName,
    gender,
    group,
    hope,
    elder,
    dateOfBirth,
    dateOfInmersed,
    ministerialServant,
    regularPionner,
  } = req.body;

  try {
    await Publisher.findOneAndUpdate(
      { _id: id },
      {
        name,
        lastName,
        gender,
        group,
        hope,
        elder,
        dateOfBirth,
        dateOfInmersed,
        ministerialServant,
        regularPionner,
      },
      { new: true }
    );
    console.log("Document updated!")
    res.json("Success!")
  } catch (error) {
    console.log("Document not found!")
  }
};
