const express = require('express')
const servicios = require('./data/servicios')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Servidor de TecniSoporte Ñuble funcionando correctamente')
})

app.get('/api/servicios', (req, res) => {
  const categoria = req.query.categoria

  if (categoria) {
    const resultado = servicios.filter(
      servicio =>
        servicio.categoria.toLowerCase() ===
        categoria.toLowerCase()
    )
    return res.json(resultado)
  }

  res.json(servicios)
})

app.get('/api/servicios/:id', (req, res) => {
  const id = Number(req.params.id)
  const servicio = servicios.find(
    item => item.id === id
  )

  if (!servicio) {
    return res.status(404).json({
      mensaje: 'Servicio no encontrado'
    })
  }

  res.json(servicio)
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})