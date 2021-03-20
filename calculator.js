
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

app.get('/bmiCalculator', (req, res)=>{
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', (req, res)=>{
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var heightSqrd = height*height;
  var bmi = weight/heightSqrd;
  res.send("The bmi is " + bmi);
});

app.post('/', (req, res) =>{
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var sum = num1 + num2;
  res.send("The result is" + sum);
});

app.listen(port, ()=>{
  console.log("server running press ^C to stop");
});
