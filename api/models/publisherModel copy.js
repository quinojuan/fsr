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
  group: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4],
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

  activityMonth: [
    {
      serviceYear: Number,
      month: {
        type: String,
        enum: ["enero", "febrero", "marzo"],
      },
      placements: Number,
      videoShowings: Number,
      hours: {
        type: Number,
        required: true,
      },
      returnVisits: Number,
      bibleStudies: Number,
      remarks: String,
    },
  ],
});

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
