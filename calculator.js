
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) =>{
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var sum = num1 + num2;
  res.send("The result is" + sum);
});

app.listen(port, ()=>{
  console.log("server running press ^C to stop");
});
