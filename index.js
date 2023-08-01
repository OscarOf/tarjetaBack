const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const routes = require("./rutas/vigilantes");

const app = express();
const PORT = 3030;

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://fundacionsemillac3:1235@fundacionsemilladonacio.j2cjyrm.mongodb.net/?retryWrites=true&w=majority").then(() => 
console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", routes);

app.listen(PORT, ()=>{
    console.log("El puerto es:"+ PORT);
});