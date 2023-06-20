const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/api');
const port = process.env.PORT||5500;
app.use('/openai',router)
app.listen(port, () => {
  console.log(`server app listening on port ${port}`)
})