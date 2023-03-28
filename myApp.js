let express = require('express');
let app = express();

ap = __dirname + '/views/index.html';

app.use("/public",
  express.static(__dirname + "/public"));

app.use( (req,res,next) => {
  console.log("${req.method} ${req.path} - ${req.ip}");
  next();
})

app.get("/", (req, res) => {
  return res.sendFile(ap);
})

app.get("/json",(req,res) => {

  if(process.env.MESSAGE_STYLE === "uppercase"){
        return res.json({ "message": "HELLO JSON" });
  }
  else{
    return res.json({ "message": "Hello json" });
  }
  
})




































module.exports = app;
