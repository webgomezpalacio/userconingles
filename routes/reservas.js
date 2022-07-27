import express from "express";

import { 
      getAllReservas,
      createReserva,
      getReservaById,
      updateReserva,
      deleteReserva
    } from "../controllers/Reservas.js";

const router = express.Router();

router.get('/', getAllReservas);
router.get('/:id', getReservaById);
router.post('/', createReserva);
router.patch('/:id', updateReserva);
router.delete('/:id', deleteReserva);


export default router;