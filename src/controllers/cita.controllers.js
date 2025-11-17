const Cita = require("../models/cita.models");


// Obtener todas las citas
exports.getCitas = async (req, res) => {
  try {
    const citas = await Cita.find();
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener citas", error: error.message });
  }
};

// Crear una nueva cita
exports.createCita = async (req, res) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();

    res.status(201).json({ message: "Cita creada exitosamente", cita });
  } catch (error) {
    res.status(500).json({ message: "Error al crear cita", error: error.message });
  }
};

// Obtener cita por ID
exports.getCitaById = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });

    res.status(200).json(cita);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cita", error: error.message });
  }
};

// Actualizar cita
exports.updateCita = async (req, res) => {
  try {
    const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });

    res.status(200).json({ message: "Cita actualizada correctamente", cita });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cita", error: error.message });
  }
};

// Eliminar cita
exports.deleteCita = async (req, res) => {
  try {
    const cita = await Cita.findByIdAndDelete(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita no encontrada" });

    res.status(200).json({ message: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cita", error: error.message });
  }
};
