/* configuracion del servidor */

import app from './index'; // importar la aplicacion desde index

const port = 4000; // se define un puerto 

app.listen(port, ()=>{
    console.log("Se ha iniciado correctamente en el puerto "+port); // donde escuchara la app y mensaje de aviso
})