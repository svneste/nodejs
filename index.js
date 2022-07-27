const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

app.get('/app', (req, res) => {
  res.send(req.query);
})
