/*const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url == "/profile"){
    res.end("this is profile route")
   }
   if(req.url == "/about"){
    res.end("this is about ")
   }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
*/

const express = require('express');
const morgan = require("morgan");
const app = express();


app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.set("view engine", "ejs");


app.use(function(req, res, next) {
    console.log("This is middleware");
    next();
});

app.get("/", function(req, res) {
    res.render('index');
});


app.post("/get-form-data", function(req, res) {
    console.log(req.body);  
    res.send("Data received");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

