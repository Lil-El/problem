const express = require("express")

const app = express()

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");  
    next();
});

app.get("/file", (req, res)=>{
    res.setHeader("Cache-Control", 'public, max-age=50000')
    res.download('./1.js');
})

app.listen(3000, ()=>{
    console.log('App start...');
});