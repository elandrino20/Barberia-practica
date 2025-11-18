// index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./database'); // Importa la conexión a MongoDB

const app = express();

// Conectar a MongoDB
connectDB();

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

// Manejo básico de errores
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error del servidor", error: err.message });
});

// 🔥 Servidor
app.listen(app.get("port"), "0.0.0.0", () => {
  console.log("Servidor corriendo en el puerto", app.get("port"));
});
