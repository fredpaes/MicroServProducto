export class ProductoController {
  repo

  constructor(repo) {
    this.repo = repo
    this.getAllProductos = this.getAllProductos.bind(this)
    this.getProductoById = this.getProductoById.bind(this)
  }

  async getAllProductos(req, res) {
    const productos = await this.repo.getAllProductos()

    res.json(productos)
  }

  async getProductoById(req, res) {
    const producto = await this.repo.getProductoById(req.params.id)

    res.json(producto)
  }
}