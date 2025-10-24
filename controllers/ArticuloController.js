const Articulo = require('../models/Articulo');

// Listar todos los artículos
exports.index = async (req, res) => {
  try {
    const articulos = await Articulo.find().sort({ created_at: -1 });
    res.render('articulo/index', { 
      title: 'Gestión de Artículos',
      articulos: articulos
    });
  } catch (error) {
    console.error('Error al obtener artículos:', error);
    res.render('articulo/index', { 
      title: 'Gestión de Artículos',
      articulos: [],
      error: 'Error al cargar los artículos'
    });
  }
};

// Mostrar formulario de creación
exports.create = (req, res) => {
  res.render('articulo/create', { 
    title: 'Crear Artículo'
  });
};

// Guardar nuevo artículo
exports.store = async (req, res) => {
  try {
    const { descripcion, precio_soles, cantidad, stock, precio_dolares, Marca, Modelo } = req.body;
    
    const articulo = new Articulo({
      descripcion,
      precio_soles: parseFloat(precio_soles),
      cantidad: parseInt(cantidad),
      stock: parseInt(stock),
      precio_dolares: parseFloat(precio_dolares),
      Marca,
      Modelo
    });
    
    await articulo.save();
    res.redirect('/articulos');
  } catch (error) {
    console.error('Error al crear artículo:', error);
    res.render('articulo/create', { 
      title: 'Crear Artículo',
      error: 'Error al crear el artículo'
    });
  }
};

// Mostrar un artículo específico
exports.show = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) {
      return res.status(404).render('error', { 
        message: 'Artículo no encontrado' 
      });
    }
    res.render('articulo/show', { 
      title: 'Ver Artículo',
      articulo: articulo
    });
  } catch (error) {
    console.error('Error al obtener artículo:', error);
    res.status(500).render('error', { 
      message: 'Error al cargar el artículo' 
    });
  }
};

// Mostrar formulario de edición
exports.edit = async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) {
      return res.status(404).render('error', { 
        message: 'Artículo no encontrado' 
      });
    }
    res.render('articulo/edit', { 
      title: 'Editar Artículo',
      articulo: articulo
    });
  } catch (error) {
    console.error('Error al obtener artículo:', error);
    res.status(500).render('error', { 
      message: 'Error al cargar el artículo' 
    });
  }
};

// Actualizar artículo
exports.update = async (req, res) => {
  try {
    const { descripcion, precio_soles, cantidad, stock, precio_dolares, Marca, Modelo } = req.body;
    
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, {
      descripcion,
      precio_soles: parseFloat(precio_soles),
      cantidad: parseInt(cantidad),
      stock: parseInt(stock),
      precio_dolares: parseFloat(precio_dolares),
      Marca,
      Modelo
    }, { new: true });
    
    if (!articulo) {
      return res.status(404).render('error', { 
        message: 'Artículo no encontrado' 
      });
    }
    
    res.redirect('/articulos');
  } catch (error) {
    console.error('Error al actualizar artículo:', error);
    res.render('articulo/edit', { 
      title: 'Editar Artículo',
      articulo: req.body,
      error: 'Error al actualizar el artículo'
    });
  }
};

// Eliminar artículo
exports.destroy = async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndDelete(req.params.id);
    if (!articulo) {
      return res.status(404).render('error', { 
        message: 'Artículo no encontrado' 
      });
    }
    res.redirect('/articulos');
  } catch (error) {
    console.error('Error al eliminar artículo:', error);
    res.status(500).render('error', { 
      message: 'Error al eliminar el artículo' 
    });
  }
};
