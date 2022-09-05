// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

let app = express();
app.use(express.static(__dirname +'/Web'));


const port = 3000;
const ip = "192.168.50.211";
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/head.html'));

  
  })
app.listen(port,() => {
    console.log(`listening on http://${ip}:${port}`);
});