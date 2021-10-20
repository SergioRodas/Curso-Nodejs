const express = require("express");
const router = express.Router();

const Mascota = require('../models/mascota')

router.get("/", async(req, res) => {

  try {
    const arrayMascotasDB = await Mascota.find()

    res.render("mascotas", {
      arrayMascotas : arrayMascotasDB
    });

  } catch (error) {
    console.log(error)
  }


});

router.get('/crear', (req, res) => {
  res.render('crear')
})

router.post('/', async(req, res) => {
  const body = req.body
  try {
    const body = req.body
    try {
        const mascotaDB = new Mascota(body)
        await mascotaDB.save()
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {

  const id = req.params.id 

  try {

    const mascotaDB = await Mascota.findOne({_id: id})
    
    res.render('detalle', {
      mascota: mascotaDB,
      error: false
    })
    
  } catch (error) {
    res.render('detalle', {
      error: true,
      mensaje: 'No se encuentra el id seleccionado'
    })
  }
})

router.delete('/:id', async(req,res) => {
  const id = req.params.id

  try {
    const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

    if (mascotaDB) {
      res.json({
        estado: true,
        mensaje: 'Eliminado'
      })
    }else{
      res.json({
        estado: false,
        mensaje: 'Error al eliminar'
      })
      
    }
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async(req, res) =>{
  try {
    const id = req.params.id 
    const body = req.body 

    const mascotaDB = await Mascota.findByIdAndUpdate(id, body)
    console.log(mascotaDB)

    res.json({
      estado: true,
      mensaje: 'Editado correctamente'
    })
    
  } catch (error) {
    console.log(error)
    res.json({
      estado: false,
      mensaje: 'La edición falló'
    })
  }
})

module.exports = router;
