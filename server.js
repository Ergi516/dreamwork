const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send("hello")
});

const port = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT} 🔥`);