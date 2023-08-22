import express from 'express';

import{
    GetPedidos,
    GetPedido,    
    postPedido,
    putPedido,
    deletePedido
} from '../../controllers/pedidos'

import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()
// end points
router.get("/", [updateDateMiddleware,GetPedidos])
router.get("/:id",[updateDateMiddleware,GetPedido])
router.post("/",[updateDateMiddleware,postPedido])
router.put("/:id",[updateDateMiddleware,putPedido])
router.delete("/:id",[updateDateMiddleware,deletePedido])

export default router;