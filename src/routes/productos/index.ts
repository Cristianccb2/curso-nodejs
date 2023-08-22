import express from 'express';

import{
    GetProductos,
    GetProducto,    
    postProducto,
    putProducto,
    deleteProducto
} from '../../controllers/productos'

import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()
// end points
router.get("/", [updateDateMiddleware,GetProductos])
router.get("/:id",[updateDateMiddleware,GetProducto])
router.post("/",[updateDateMiddleware,postProducto])
router.put("/:id",[updateDateMiddleware,putProducto])
router.delete("/:id",[updateDateMiddleware,deleteProducto])

export default router;