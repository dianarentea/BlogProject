const express = require("express");
const fs = require("fs");
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));


app.post('/upload', upload.array('images'), (req, res) => {
  const { email, title, description } = req.body;

  const userDir = path.join(__dirname, 'uploads', email);
  if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir);
  }

  const imagePaths = req.files.map(file => {
      const filePath = path.join(userDir, file.originalname);
      fs.renameSync(file.path, filePath);
      return filePath;
  });

  const formData = {
      email,
      title,
      description,
      images: imagePaths,
  };

  const dataFilePath = path.join(__dirname, 'user-data.json');
  const currentData = fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath)) : [];
  currentData.push(formData);
  fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

  res.status(200).json({ message: 'Story uploaded successfully!' });
});

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

app.get("/articles/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);

  fs.readFile("./data/articles.json", (err, data) => {
    if (err) {
      res.status(500).send("An error occurred while reading articles file");
    } else {
      const articles = JSON.parse(data);
      const article = articles.find((article) => article.id === articleId);

      if (article) {
        res.send(article);
      } else {
        res.status(404).send("Article not found");
      }
    }
  });
});

app.get("/mountains", (req, res) => {
  fs.readFile("./data/mountains.json", (err, data) => {
    if (err) {
      res.status(500).send("An error occurred while reading mountains file");
    } else {
      const mountains = JSON.parse(data);
      res.send(mountains);
    }
  });
});

app.get("/countryside", (req, res) => {
  fs.readFile("./data/countryside.json", (err, data) => {
    if (err) {
      res.status(500).send("An error occurred while reading countryside file");
    } else {
      const countryside = JSON.parse(data);
      res.send(countryside);
    }
  });
});
  
app.listen(5000, () => {
  console.log(`Server listening on ${5000}`);
});
