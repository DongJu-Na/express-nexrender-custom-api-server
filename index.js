require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT;

app.get("/",(req,res)=>{
    res.send("test");
});

app.post('/test', (req, res)=>{
    res.status(200).json({ result : 'ok' });
});

app.use(cors());

app.listen(port,()=>{
    console.log("Server Started !" + port);
});


