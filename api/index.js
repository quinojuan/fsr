import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import publisherRoutes from "./routes/publisherRoutes.js";

const port = 3001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/", publisherRoutes);

app.get("/", (req, res) => {
  res.json({message: "Hello from get!"})
})

app.listen(port, () => {
  connectDB();
  console.log("App is listening on port 3001!");
});
