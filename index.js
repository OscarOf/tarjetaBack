const express = require('express');
const app = express();
const PORT = 3030;

app.get("/", (req, res)=> {//res: Es para enviar una respuesta, req: Es para tomar datos de los usuarios
    res.send("Hola sirve");
}); 

app.listen(PORT, ()=>{
    console.log("El puerto es:"+ PORT);
});