const express = require('express');     //const = var that can't be changed
const app = express();

/*
app.get('/', (req, res) => {
    res.send("Updated");
});
*/


app.get('/api/users', (req,res) => {
    res.send("users");

});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Started");
});   //make the web server listen on a particular port

