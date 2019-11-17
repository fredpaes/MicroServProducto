import yenv from 'yenv'

const env = yenv()
const ObjectId = require('mongodb').ObjectId

const repository = db => {
  const collection = db.collection(env.DB.COLLECTION)

  const getAllProductos = async () => {
    const productos = await collection.find({}, {cuv: 1, precio: 1}).toArray()

    return productos
  }

  const getProductoById = async _id => {
    const producto = await collection.findOne({ _id: ObjectId(_id)})

    return producto
  }

  const disconnect = () => {
    db.close()
  }

  return { getAllProductos, getProductoById, disconnect }
}

const connect = connection => {
  return connection
    ? repository(connection)
    : new Error('Connection is not supplied')
}

export { connect }