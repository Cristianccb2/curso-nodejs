import { PrismaClient, Prisma } from "@prisma/client";
import {Request,Response} from 'express'

const prisma = new PrismaClient()

const GetCategorias = async (req: Request, res: Response)=> {
    try{
        const result = await prisma.categorias.findMany()
        res.status(200).json(result)
    } catch(error) {
        console.log("se presento un error",error)
        res.status(500).json(error)
    }
}

const GetCategoria = async (req: Request, res: Response)=> {
    const{id} = req.params
    try{
        const result = await prisma.categorias.findUnique({where: {id: parseInt(id)}})
        res.status(200).json(result)
    } catch(error) {
        console.log("se presento un error",error)
        res.status(500).json(error)
    }
}

const postCategoria = async (req: Request , res: Response) => {
    try{
        const result = await prisma.categorias.create({data: req.body})
        res.status(200).json(result)
    }catch(error){
        console.log("se presento un error",error)
        res.status(500).json(error)
    }
}

const putCategoria = async (req: Request , res: Response)=>{
    const {id} = req.params
    const {body} = req
    try{
        const result = await prisma.categorias.update({where: {id: parseInt(id)} , data:body} )
        res.status(200).json(result)
    }catch(error){
        console.log("se presento un error",error)
        res.status(500).json(error)
    }
}

const deleteCategoria = async (req: Request , res: Response)=>{
    const {id} = req.params
    try{
        const result = await prisma.categorias.delete({where: {id: parseInt(id)}})
        res.status(200).json(result)
    }catch(error){
        console.log("se presento un error",error)
        res.status(500).json(error)
    }
}

export{
    GetCategorias,
    GetCategoria,    
    postCategoria,
    putCategoria,
    deleteCategoria
}