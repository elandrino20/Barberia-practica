// database.js
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        if (!URI) {
            throw new Error("❌ No se encontró la variable MONGO_URI. Asegúrate de configurar Render.");
        }

        const db = await mongoose.connect(URI);
        console.log("✅ Conectado a MongoDB Atlas:", db.connection.name);
    } catch (error) {
        console.error("❌ Error al conectar la base de datos:", error.message);
        process.exit(1); // Detiene la app si no se puede conectar a la DB
    }
};

module.exports = connectDB;

