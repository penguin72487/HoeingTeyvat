// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

let app = express();
app.use(express.static(__dirname +'/Web'));


const port = 3000;
const ip = "10.25.234.7";
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/head_Bootstrap.html'));

  
  })
app.listen(port,() => {
    console.log(`listening on http://${ip}:${port}`);
});