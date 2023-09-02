const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const __dirname1 = path.resolve();


app.use(express.static(path.join(__dirname1, "/build")));
app.get('*', ((req, res) =>{
    res.sendFile(path.resolve(__dirname1, "build", 'index.html'));
}));

app.listen(port, () => {
    console.log("App is listening at port ", port);
});