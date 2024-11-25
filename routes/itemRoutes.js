import express from 'express';
import {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
} from '../controllers/itemController.js';

const router = express.Router();

// Rutas CRUD
router.post('/', createItem); // Crear
router.get('/', getItems); // Obtener todos
router.get('/:id', getItemById); // Obtener por ID
router.put('/:id', updateItem); // Actualizar
router.delete('/:id', deleteItem); // Eliminar

export default router;
