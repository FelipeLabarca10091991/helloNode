import express from 'express';
import { dirname, join } from 'path' //este es un modulo de node. Se importa para hacer un path dinàmico
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js'

const app = express();

//generamos un path dinàmico para que el programa no se caiga si cambiamos los directorios
const __dirname = dirname(fileURLToPath(import.meta.url)); //ocupamos doble guion bajo antes del nombre porque es una variable interna. 

app.set('views', join(__dirname, '/views')); //seteamos el path concatenado  
app.set('view engine', 'ejs');

app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')));

const port = 3000;
app.listen(port);
console.log("Server is listening on port", port);

