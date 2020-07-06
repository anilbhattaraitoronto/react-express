const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const cors = require("cors");

const posts = require("./data/posts");

app.use(router);
app.use(cors());

router.get("/api", (req, res) => {
  res.send(posts);
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
