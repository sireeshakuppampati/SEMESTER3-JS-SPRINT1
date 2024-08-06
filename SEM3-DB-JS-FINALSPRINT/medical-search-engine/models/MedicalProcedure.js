const mongoose = require('mongoose');

const medicalProcedureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true }
});

module.exports = mongoose.model('MedicalProcedure', medicalProcedureSchema);
