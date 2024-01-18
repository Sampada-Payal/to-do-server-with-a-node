//IMPORTING EXPRESS
const express = require("express");

//INITIALIZING EXPRESS
const app = express();

//USING EXPRESS
app.use(express.json());


const port = 5500;

const toDoList = ["hey everyone!", "hope you", "all are", "doing good :)"];

app.get("/todos", (req, res) => {
    //CALLBACK
    res.status(200).send(toDoList)
});