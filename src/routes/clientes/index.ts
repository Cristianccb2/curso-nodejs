import express from 'express';

import{
    GetClientes,
    GetCliente,    
    postCliente,
    putCliente,
    deleteCliente
} from '../../controllers/clientes'

import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()
// end points
router.get("/", [updateDateMiddleware,GetClientes])
router.get("/:id",[updateDateMiddleware,GetCliente])
router.post("/",[updateDateMiddleware,postCliente])
router.put("/:id",[updateDateMiddleware,putCliente])
router.delete("/:id",[updateDateMiddleware,deleteCliente])

export default router;