const router = require('express').Router();
const { Error } = require('mongoose');
const VigilanteModel = require('../esquema/vigilante');

router.get("/mostrar", async (req, res)=>{
    try {
        const vigilantes = await VigilanteModel.find();
        res.json(vigilantes);
    } catch (error) {
        console.log(error);
    }
});

router.post("/encontrar", async(req, res)=>{
    try {
        const {cedula} = req.body;
        const vigilanteB = await VigilanteModel.findOne({cedula});
        res.send({data: vigilanteB});       
    } catch (error) {
        res.send({message: "Error: Usuario no encontrado"});
    }
});

router.post("/ingresar", async (req, res)=>{
    try {
        const{nombre, cedula, foto} = req.body;
        const vigilanteN = await VigilanteModel.create({nombre, cedula, foto});
        res.send({data: vigilanteN});
    } catch (error) {
        res.json("Error al registrar nuevo vigilante")
    }
});

module.exports = router;