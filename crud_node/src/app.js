const express = require('express');
const app = express();


const indiceRutas=require('./rutas/index');


app.use("/",indiceRutas);

app.listen(4000,() => {
	console.log("servidor escuchando puerto 3000");
})