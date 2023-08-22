/* archico principal */

import express, { Request, Response } from 'express'; // importa Express para el manejo de la aplicación web
import dotenv from 'dotenv'; // importa Dotenv para cargar variables de entorno desde un archivo
import cors from 'cors'; // importa Cors para habilitar el control de acceso a recursos cruzados
import routes from './routes';

dotenv.config() // Carga las variables de entorno desde un archivo .env


const app = express() // Iniciamos una instancia de express

const corsOptions = { // configura el Cors para Permitir solicitudes desde cualquier origen
    origin: '*'
}

app.use(cors(corsOptions)) // Aplicar el middleware CORS para manejar las solicitudes de recursos cruzados
app.use(express.json()) // permite la lectura de formato json

/* app.use("/",(req:Request, res: Response)=>{ // Definir una ruta para el manejo de la raíz del sitio ("/")
    res.send("hola mundo") // Envia"Hola mundo" como respuesta (res) a la solicitud
}) ESTE ERA EL PRIMER HOLA MUNDO DE LA APP*/

app.use("/api",routes)

export default app; // Exportar la instancia de la aplicación Express
