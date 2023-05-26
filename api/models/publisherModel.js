import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: new Date("01/01/1914"),
  },
  dateInmersed: {
    type: Date,
    default: new Date("01/01/1914"),
  },
  gender: {
    type: String,
    enum: ["Masculino", "Femenino"],
    required: true,
  },
  hope: {
    type: String,
    enum: ["Otras ovejas", "Ungido"],
    required: true,
  },
  elder: { type: Boolean, default: false },
  ministerialServant: { type: Boolean, default: false },
  regularPionner: { type: Boolean, default: false },
});

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
