const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // 🔧 Evita la advertencia de Mongoose 7

const URI = 'mongodb://localhost:27017/dbucn2025-1';

const conn = async () => {
    try {
        const db = await mongoose.connect(URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true, // ya no se usa en Mongoose 6+
            // useFindAndModify: false, // ya no se usa en Mongoose 6+
        });
        console.log("✅ Base de datos conectada:", db.connection.name);
    } catch (error) {
        console.log("❌ Error al conectar la base de datos:", error.message);
    }
};

module.exports = conn();