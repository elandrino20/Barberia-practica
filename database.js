require("dotenv").config();

const mongoose = require('mongoose');

// Evitar advertencias de versiones nuevas de Mongoose
mongoose.set('strictQuery', false);

// 🔥 Leer la cadena desde Render o .env
const URI = process.env.MONGO_URI;

const conn = async () => {
    try {
        if (!URI) {
            throw new Error("❌ No se encontró la variable MONGO_URI. Asegúrate de configurar Render.");
        }

        const db = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Conectado a MongoDB Atlas:", db.connection.name);
    } catch (error) {
        console.log("❌ Error al conectar la base de datos:", error.message);
    }
};

module.exports = conn();
