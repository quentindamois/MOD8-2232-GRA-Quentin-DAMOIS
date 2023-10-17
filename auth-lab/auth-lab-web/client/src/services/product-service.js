import axios from 'axios'
import validator from '../validators/product-validator.js'

const findProduct = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`)
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

const findProducts = async (query) => {
  try {
    const response = await axios.get('/products', { params: query })
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

const createProduct = async (name, price, description) => {
  try {
    const error = validator.validateProduct(name, price, description)
    if (error) {
      return { error }
    }

    const response = await axios.post('/products', { name, price, description })
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

const updateProduct = async (id, name, price, description) => {
  try {
    const error = validator.validateProduct(name, price, description)
    if (error) {
      return { error }
    }

    await axios.patch(`/products/${id}`, { name, price, description })
    return { success: { message: 'Successfully saved product.' } }
  } catch (error) {
    return handleError(error)
  }
}

const deleteProduct = async (id) => {
  try {
    await axios.delete(`/products/${id}`)
    return { success: { message: 'Successfully deleted product.' } }
  } catch (error) {
    return handleError(error)
  }
}

function handleError(error) {
  if (error.response) {
    console.log(error.response.data)
    return error.response.data
  }

  if (error.request) {
    console.error(error)
    return { error: { message: 'Failed to connect to server.' } }
  }

  console.error(error)
  return { error: { message: 'Something went wrong.' } }
}

export default function useProductService() {
  return {
    findProduct,
    findProducts,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
