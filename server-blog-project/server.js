const express = require("express");
const app = express();
const fs = require("fs");
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get("/articles", (req, res) => {
  fs.readFile("./data/articles.json", (err, data) => {
    if (err) {
      res.status(500).send("An error occurred while reading articles file");
    } else {
      const articles = JSON.parse(data);
      res.send(articles);
    }
  });
});
  
app.listen(5000, () => {
  console.log(`Server listening on ${5000}`);
});
