
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
<<<<<<< HEAD
  res.sendFile(__dirname + "/index.html");
=======
  res.sendFile(__dirname);
>>>>>>> 163b201c40be7f0ded4b94841e28e782165fd90f
});

app.listen(port, ()=>{
  console.log("server running press ^C to stop");
});
