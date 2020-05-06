const express = require('express');     //const = var that can't be changed
const app = express();


app.get('/', (req, res) => {
    res.send("Updated");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Testing");
});   //make the web server listen on a particular port

