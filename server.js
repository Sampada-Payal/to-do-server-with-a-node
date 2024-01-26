//IMPORTING EXPRESS
const express = require("express");

//INITIALIZING EXPRESS
const app = express();

//USING EXPRESS
// application will use only json data format.
app.use(express.json());


const port = 5500;

//ARRAY
const toDoList = ["hey everyone!", "hope you", "all are", "doing good :)"];

// GET method
app.get("/todos", (req, res) => {
    //CALLBACK
    res.status(200).send(toDoList)
});

// http://localhost:5500/todos

// POST method
app.post("/todos", (req, res) => {
    let newDoItem = req.body.item;
    toDoList.push(newDoItem);
    res.status(201).send({ message: "Item added successfully!" })
})

//DELETE METHOD
app.delete("/todos", (req, res) => {
    var itemToDelete = req.body.item;
    toDoList.find((elem, index) => {
        if (elem === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });
    res.status(204).send({
        message: `Deleted item ${req.body.item}`
    });
});

// as PUT and PATCH are not studied yet we will use a method that will perform all things. 'i.e all'
// undeffined methods will be handled by the 'all' method
app.all("/todos", (req, res) => {
    res.status(501).send({
        message : "Not Yet Implemented...!"
    })
})

app.all("*", (req, res) => {
    res.status(404).send({
        message : "default url"
    })
})  // * indicates whatever URL u will get response for it
// undefined urls will be handled by '*'

// server listening
app.listen(port, () => {
    console.log(`NodeJs with Express started running successfully on port ${port}`);
});

/*
let - common local variable
var - global or function scope variable
const - constant value once assigned cannot be reassigned
all - it is a generic method and always written at last.
*/