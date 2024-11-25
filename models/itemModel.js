import mongoose from 'mongoose';

// Definir el esquema del modelo
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Exportar el modelo
export default mongoose.model('Item', ItemSchema);
