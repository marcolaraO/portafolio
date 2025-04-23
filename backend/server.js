// 1. Importar librerías
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// 2. Configurar el servidor
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Middlewares
app.use(cors());
app.use(bodyParser.json());

// 4. Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portafolio_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// 5. Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente! 🎯');
});

// 6. Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});