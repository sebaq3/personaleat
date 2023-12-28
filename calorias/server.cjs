// server.cjs

const express = require('express');
const path = require('path');
const { calcularCalorias } = require('./calculoCalorias.cjs'); // Importar la lógica de cálculo

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// Ruta para procesar el formulario
app.post('/calcular-calorias', (req, res) => {
  const { altura, peso, edad, nivelActividad, objetivo } = req.body;

  // Verificar que se proporcionaron todos los datos necesarios
  if (!altura || !peso || !edad || !nivelActividad || !objetivo) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Calcular las calorías utilizando la lógica importada
  const caloriasDiarias = calcularCalorias({ altura, peso, edad, nivelActividad, objetivo });

  // Enviar la respuesta al cliente
  res.json({ caloriasDiarias });
});

// Todas las demás rutas deben devolver el archivo 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
