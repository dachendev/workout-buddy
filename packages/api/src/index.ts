import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log("API listening at http://localhost:" + port);
});
