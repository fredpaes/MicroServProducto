import express from 'express'
import { connect } from '../repository/index'
import { ProductoController } from '../Controllers/productos'

const router = express.Router()

const routes = db => {
  const repo = connect(db)

  const controller = new ProductoController(repo)

  router.get('/productos', controller.getAllProductos)
  router.get('/productos/:id', controller.getProductoById)

  return router
}

export { routes }