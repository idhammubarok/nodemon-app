const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {

    res.send("Helloword!");
});

app.get("/name", (req, res) => {

    res.send("My name is Jhon Doe");
});

app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})