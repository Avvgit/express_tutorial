const express = require('express');
const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello LarnU 👽!');
  });

  app.post("/sum", (req, res) => {
    const { a, b } = req.body;
    const suma = a + b;
    res.send({ suma });
  });

  app.post("/sub", (req, res) => {
    const { a, b } = req.body;
    const resta = a - b;
    res.send({ resta });
  });

  app.post("/mul", (req, res) => {
    const { a, b } = req.body;
    const mult = a * b;
    res.send({ mult });
  });

  app.post("/div", (req, res) => {
    const { a, b } = req.body;
    const div = a / b;
    res.send({ div });
  });


  app.listen(7000, () => {
    console.log('Server running on port 7000');
  });
