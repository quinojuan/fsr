import Publisher from "../models/publisherModel.js";

export const loadDB = async () => {
  const data = [
    {
      lastName: "Acevedo",
      name: "Juana",
      regularPionner: "false",
      elder: "false",
      ministerialServant: "false",
      group: 1,
      hope: "Otras ovejas",
      dateOfBirth: '1950-12-27',
      dateOfInmersed: "1950-12-27",
      gender: "Femenino",
    }
  ];

  try {
    const acevedo = await Publisher.findOne({ lastName: "Acevedo" });
    if (!acevedo) {
      await Publisher.insertMany(data);
      console.log("Exito");
    } else {
      console.log("Los datos ya estaban cargados!");
    }
  } catch (error) {
    console.error(error.message);
  }
};
