let bodyParser = require('body-parser');
let express = require('express');
let app = express();

ap = __dirname + '/views/index.html';

app.use(bodyParser.urlencoded({extended: false}));

app.use("/public",
  express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.get("/", (req, res) => {
  return res.sendFile(ap);
})

app.get("/json", (req, res) => {

  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ "message": "HELLO JSON" });
  }
  else {
    return res.json({ "message": "Hello json" });
  }

})

app.get("/now", (req,res,next) => {
   req.time = new Date().toString();
  next();
},(req,res) => {
   res.json({"time" : req.time});
})

app.get("/:word/echo",(req,res) => {
  return res.json({ echo : req.params.word})
})

app.get("/name", (req ,res) => {
  return res.json({ "name": req.query.first + " " + req.query.last})
})

app.post("/name",(req,res) => {
  res.json({name : req.body.first + " " + req.body.last})
})






























module.exports = app;
