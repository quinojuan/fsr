import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import publisherRoutes from "./routes/publisherRoutes.js";
import { loadDB } from "./helpers/loadDB.js";

const port = 3001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/publisher", publisherRoutes);


app.listen(port, () => {
  connectDB();
  loadDB();
  console.log("App is listening on port 3001!");
});
