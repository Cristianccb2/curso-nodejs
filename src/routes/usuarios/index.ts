import express from 'express';

import{
    GetUsuarios,
    GetUsuario,    
    postUsuario,
    putUsuario,
    deleteUsuario
} from '../../controllers/usuarios'

import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()
// end points
router.get("/", [updateDateMiddleware,GetUsuarios])
router.get("/:id",[updateDateMiddleware,GetUsuario])
router.post("/",[updateDateMiddleware,postUsuario])
router.put("/:id",[updateDateMiddleware,putUsuario])
router.delete("/:id",[updateDateMiddleware,deleteUsuario])

export default router;