import express from "express"

const app = express();

// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.json({ok: true});
});

app.listen(3001, () => {
  console.log("App is listening on port 3001!");
});
