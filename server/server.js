const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => `Server running on port ${PORT} 🔥`);
