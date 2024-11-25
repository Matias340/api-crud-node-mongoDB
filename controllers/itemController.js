import Item from '../models/itemModel.js';

// Crear un nuevo ítem
export const createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el ítem', error });
    }
};

// Obtener todos los ítems
export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los ítems', error });
    }
};

// Obtener un ítem por ID
export const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Ítem no encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ítem', error });
    }
};

// Actualizar un ítem
export const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Ítem no encontrado' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el ítem', error });
    }
};

// Eliminar un ítem
export const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Ítem no encontrado' });
        res.status(200).json({ message: 'Ítem eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ítem', error });
    }
};
