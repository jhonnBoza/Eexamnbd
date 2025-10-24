const Administrador = require('../models/Administrador');

// Mostrar formulario de login
exports.showLogin = (req, res) => {
  res.render('auth/login', { 
    title: 'Iniciar Sesión',
    error: req.query.error 
  });
};

// Procesar login
exports.login = async (req, res) => {
  try {
    const { usuario, clave } = req.body;
    
    // Buscar administrador por usuario
    const admin = await Administrador.findOne({ usuario: usuario });
    
    if (!admin) {
      return res.redirect('/login?error=Usuario o contraseña incorrectos');
    }
    
    // Verificar contraseña
    if (admin.clave !== clave) {
      return res.redirect('/login?error=Usuario o contraseña incorrectos');
    }
    
    // Redirigir directamente a artículos
    res.redirect('/articulos');
  } catch (error) {
    console.error('Error en login:', error);
    res.redirect('/login?error=Error interno del servidor');
  }
};

// Logout - simplemente redirige al login
exports.logout = (req, res) => {
  res.redirect('/login');
};

// Middleware básico - siempre permite acceso
exports.requireAuth = (req, res, next) => {
  next();
};
