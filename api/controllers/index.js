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
      active,
      dateOfBirth,
      dateInmersed,
      ministerialServant,
      regularPionner,
      activityMonth,
    } = req.body;

    const publisher = new Publisher({
      name,
      lastName,
      gender,
      group,
      hope,
      elder,
      active,
      dateOfBirth,
      dateInmersed,
      ministerialServant,
      regularPionner,
      activityMonth
    });
    await publisher.save();
    console.log(publisher)
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
    active,
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
        active,
        dateOfBirth,
        dateOfInmersed,
        ministerialServant,
        regularPionner,
      },
      { new: true, runValidators: true } // si no ponía el runValidator me permitía actualizar el valor del enum "hope" a cualquier dato.
    );
    console.log("Document updated!");
    res.json("Success!");
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};
export const updateServiceReport = async (req, res) => {
  const { id } = req.params;
  const { activityMonth } = req.body;
  const {
    month,
    placements,
    videoShowings,
    hours,
    returnVisits,
    bibleStudies,
    remarks,
  } = activityMonth;

  console.log(activityMonth, "<<<<< soy activityMonth")
  try {
    await Publisher.updateOne(
      { _id: id },
      {
        $push: {
          activityMonth: {
            month,
            placements,
            videoShowings,
            hours,
            returnVisits,
            bibleStudies,
            remarks,
          },
        },
      },
      { new: true, runValidators: true }
    );

    res.json("success");
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};
