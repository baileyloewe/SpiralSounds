import express from 'express'
import { getGenres } from '../controllers/productsControllers.js'
import { getProducts } from '../controllers/productsControllers.js'

export const productsRouter = express.Router()

productsRouter.get('/genres', getGenres)
productsRouter.get('/', getProducts)