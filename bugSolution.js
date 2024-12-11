const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed
app.post('/data', (req, res) => {
  console.log(req.body);
  // ... process the data ...
  res.send('OK');
});
app.listen(3000, () => console.log('Server listening on port 3000'));