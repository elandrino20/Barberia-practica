const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Error al conectar la base de datos: ❌ No se encontró la variable MONGO_URI. Asegúrate de configurar Render.");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("🚀 MongoDB conectado exitosamente"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));
