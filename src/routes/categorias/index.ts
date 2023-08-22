import express from 'express';

import{
    GetCategorias,
    GetCategoria,    
    postCategoria,
    putCategoria,
    deleteCategoria
} from '../../controllers/categorias'

import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()
// end points
router.get("/", [updateDateMiddleware,GetCategorias])
router.get("/:id",[updateDateMiddleware,GetCategoria])
router.post("/",[updateDateMiddleware,postCategoria])
router.put("/:id",[updateDateMiddleware,putCategoria])
router.delete("/:id",[updateDateMiddleware,deleteCategoria])

export default router;