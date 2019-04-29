const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myConnection= require('express-myconnection');
const app = express();


const indiceRutas=require('./rutas/index');

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//middleware
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql13'
},'single'));

app.use("/",indiceRutas);

app.listen(app.get('port'),() => {
	console.log("servidor escuchando puerto 3000");
})