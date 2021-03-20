
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) =>{
  console.log(req.body);
  res.send("Post posted");
});

app.listen(port, ()=>{
  console.log("server running press ^C to stop");
});
