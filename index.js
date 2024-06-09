const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! c est moi. Jenkins configuré, et encore !!!!!!! bada ');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
