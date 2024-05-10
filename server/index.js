const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());


// ROUTES
// create a todo
app.post("/todo", async (req, res) => {
    try {
        console.log(req.body);

    } catch (error) {
        console.log(err.message);
    }
})
//get all todo

// get a todo

//update a todo

// delete a todo


app.listen(5000, () => {
    console.log("Server has started at post 5000");
})