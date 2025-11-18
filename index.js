const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./database'); 

const app = express();

// Puerto para Render
const PORT = process.env.PORT || 4000;
app.set("port", PORT);

// Middleware
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta base para verificar que el backend funciona
app.get("/", (req, res) => {
  res.send("🚀 API funcionando correctamente");
});

// Rutas
app.use('/api/citas', require('./src/routers/cita.route'));

// 🔥 Servidor
app.listen(app.get("port"), "0.0.0.0", () => {
  console.log("Servidor corriendo en el puerto", app.get("port"));
});

