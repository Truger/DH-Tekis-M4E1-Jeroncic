const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const puerto = process.env.PORT
console.log('probando')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
