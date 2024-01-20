import express from "express";
import { dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname= dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;


app.use(morgan("short"));
app.use(bodyParser.urlencoded( { extended : true }));
app.use((req,res,next) => {
    console.log(req.method);
    next();
});

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile( __dirname + "/public/login.html");
   
    
});
app.post("/submit", (req,res) => {
    console.log(req.body);  
});

app.get("/submit", (req,res) => {
    res.send("<h1> Signed up Successfully<h1>");
});


    
   


app.listen(port, () => {
    console.log("listening on port:" + port);
});
