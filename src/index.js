import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the root app")
})

app.listen(3000, () => {
    console.log("The server is listen on port 3000")
})