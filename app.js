const express = require('express');     //const = var that can't be changed
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Christi you hot ey");
});


app.listen(port, () => {
    console.log("Christi I have something to tell you...");


});   //make the web server listen on a particular port

