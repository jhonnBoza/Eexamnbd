const mongoose = require('mongoose');
const Administrador = require('../models/Administrador');

// Conectar a MongoDB
const mongoDB = 'mongodb://127.0.0.1:27017/myappdb';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Conectado a MongoDB');
  
  try {
    // Crear administrador de prueba
    const admin = new Administrador({
      usuario: 'admin',
      clave: '123456',
      correo: 'admin@test.com'
    });
    
    await admin.save();
    console.log('Administrador creado exitosamente:');
    console.log('Usuario: admin');
    console.log('Contraseña: 123456');
    console.log('Email: admin@test.com');
    
    process.exit(0);
  } catch (error) {
    console.error('Error al crear administrador:', error);
    process.exit(1);
  }
});
