import Reservas from "../models/reservasModel.js";



export const getAllReservas = async (req, res) => {
    try{
    const reservas = await Reservas.findAll();
    res.json(reservas);
} catch (error) {
    res.json({ message: error.message});
}
}

export const getReservaById = async (req, res) => {
    try {
        const reservas = await Reservas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(reservas[0]);
    } catch (error) {
        res.json({ message: error.message});
    }
}

export const createReserva = async (req, res) => {
    try {
         await Reservas.create(req.body);
        res.json({
            "message": "Reserva creada"
        });
    } catch (error){
        res.json({ message: error.message });
    }
}

export const updateReserva = async (req, res) => {
    try {
         await Reservas.update(req.body, {
            where: {
                id: req.params.id
            }
         });
        res.json({
            "message": "Reserva Actualizada"
        });
    } catch (error){
        res.json({ message: error.message });
    }
}

export const deleteReserva = async (req, res) => {
    try {
         await Reservas.destroy( {
            where: {
                id: req.params.id
            }
         });
        res.json({
            "message": "Reserva Eliminada"
        });
    } catch (error){
        res.json({ message: error.message });
    }
}