const express = require('express');
//variable router para utilizar la solicitud http (GET/POST/PUT/DELETE) en express
const router = express.Router();
const contenidoEducativo = require('../data/contenido-educativo');

//Obtener materias
router.get('/api/materias', (req, res) => {
    const materias = Object.keys(contenidoEducativo).map(key => ({
    id: key,
    nombre: contenidoEducativo[key].nombre,
    color: contenidoEducativo[key].color,
    icono: contenidoEducativo[key].icono
  }));
  res.json(materias);
});

// Obtener información de una materia específica con todos sus grados
router.get('/api/materias/:materiaId', (req, res) => {
    const { materiaId } = req.params;
    const materia = contenidoEducativo[materiaId];
  
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    
    res.json(materia);
});

//Obtener grados de una materia
router.get('/api/materias/:materiaId/grados', (req, res) => {
    const { materiaId } = req.params;
    const materia = contenidoEducativo[materiaId];
    
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    
    const grados = Object.keys(materia.grados).map(key => ({
        id: key,
        nombre: materia.grados[key].nombre,
        cantidadTemas: materia.grados[key].temas.length
    }));
    
    res.json(grados);
});

//Obtener temas de un grado específico
router.get('/api/materias/:materiaId/grados/:gradoId', (req, res) => {
    const { materiaId, gradoId } = req.params;
    const materia = contenidoEducativo[materiaId];
    
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    
    const grado = materia.grados[gradoId];
    
    if (!grado) {
        return res.status(404).json({ error: 'Grado no encontrado' });
    }
    
    res.json(grado);
});

//Obtener un tema específico
router.get('/api/materias/:materiaId/grados/:gradoId/temas/:temaId', (req, res) => {
    const { materiaId, gradoId, temaId } = req.params;
    const materia = contenidoEducativo[materiaId];
    
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    
    const grado = materia.grados[gradoId];
    
    if (!grado) {
        return res.status(404).json({ error: 'Grado no encontrado' });
    }
    
    const tema = grado.temas.find(t => t.id === temaId);
    
    if (!tema) {
        return res.status(404).json({ error: 'Tema no encontrado' });
    }
    
    res.json(tema);
});

//Verificar respuesta de ejercicio
router.post('/api/verificar-respuesta', (req, res) => {
    const { respuestaSeleccionada, respuestaCorrecta } = req.body;
  
    const esCorrecta = respuestaSeleccionada === respuestaCorrecta;
    
    res.json({
        correcta: esCorrecta,
        mensaje: esCorrecta ? '¡Excelente! Respuesta correcta.' : 'Respuesta incorrecta. Sigue intentando.'
    });
});

module.exports = router;