const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./database'); 

const app = express();

app.set("port", process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas

app.use('/api/citas', require('./src/routers/cita.route'));




app.listen(app.get("port"), () => {
  console.log("✅ Servidor corriendo en el puerto", app.get("port"));
});
