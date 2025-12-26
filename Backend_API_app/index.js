const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('API is running');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
