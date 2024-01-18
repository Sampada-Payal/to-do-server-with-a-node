//IMPORTING EXPRESS
const express = require("express");

//INITIALIZING EXPRESS
const app = express();

//USING EXPRESS
app.use(express.json());


const port = 5500;

//ARRAY
const toDoList = ["hey everyone!", "hope you", "all are", "doing good :)"];

app.get("/todos", (req, res) => {
    //CALLBACK
    res.status(200).send(toDoList)
});

//server listening
app.listen(port, () => {
    console.log(`NodeJs with Express started running successfully on port ${port} `)
})