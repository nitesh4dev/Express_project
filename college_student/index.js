const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const dataPath = "./studentData.json";


app.listen(port , () =>{console.log(`server is running at ${port}`)});

app.post("/add",(req,res)=>{

    fs.writeFile(dataPath,JSON.stringify(req.body),(err)=>console.log(err));
    res.send("data added succesfully");
})
   

app.get("/getData" , (req,res)=>{
    fs.readFile(dataPath,'utf8',(err,data)=>{
        res.send((data));
    })
})
