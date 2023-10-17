import express from 'express'
import validator from '../../validators/product-validator.js'
import repository from '../../persistence/product-repository.js'
import createPaginator from '../../utility/paginator.js'

const router = express.Router()

// GET request handler for /products endpoint (public)
router.get('/products', async (req, res, next) => {
  try {
    // Validate request parameters, and return null if valid or error if invalid
    const options = { search: req.query.search, pagination: { page: req.query.page, size: req.query.size } }
    const err = validator.validateFindProducts(options)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const count = await repository.getProductCount(options)

    const paginator = createPaginator(10, 100) // Create paginator with default page size 10, max page size 100
    const pagination = paginator.createPagination(options.pagination.page, options.pagination.size, count) // Create pagination
    options.pagination = pagination

    const products = await repository.findProducts(options) // Find products in database table based on search and pagination

    const links = paginator.createPageLinks(pagination, req.baseUrl + req.path, req.query) // Create page links to first/previous/next/last pages
    res.status(200).json({ products, pagination, links }) // Send 200 response with products, pagination, and links in JSON body
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// POST request handler for /products endpoint (authenticated + authorized)
router.post('/products', async (req, res, next) => {
  try {
    const name = req.body.name
    const price = roundPrice(req.body.price)
    const description = req.body.description

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateCreateProduct(name, price, description)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    // Insert product in database table
    const product = await repository.createProduct(name, price, description)
    res.status(201).json({ product }) // Send 201 response with created product in body
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// GET request handler for /products/:id endpoint (public)
router.get('/products/:id', async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateFindProduct(id)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const product = await repository.findProduct(id) // Find product by id in database table
    if (product) {
      res.status(200).json({ product }) // Send 200 response with product in body
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// PUT request handler for /products/:id endpoint (authenticated + authorized)
router.put('/products/:id', async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)
    const name = req.body.name
    const price = roundPrice(req.body.price)
    const description = req.body.description

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateReplaceProduct(id, name, price, description)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    // Update product in database table
    const updated = await repository.updateProduct(id, name, price, description)
    if (updated) {
      res.sendStatus(200) // Send 200 response indicating product was successfully updated
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// PATCH request handler for /products/:id endpoint (authenticated + authorized)
router.patch('/products/:id', async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)
    const name = req.body.name
    const price = roundPrice(req.body.price)
    const description = req.body.description

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateUpdateProduct(id, name, price, description)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    // Update product in database table
    const updated = await repository.updateProduct(id, name, price, description)
    if (updated) {
      res.sendStatus(200) // Send 200 response indicating product was successfully updated
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// DELETE request handler for /products/:id endpoint (authenticated + authorized)
router.delete('/products/:id', async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateDeleteProduct(id)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const deleted = await repository.deleteProduct(id) // Delete product from database table
    if (deleted) {
      res.sendStatus(200) // Send 200 response indicating product was successfully deleted
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

const roundPrice = (price) => {
  if (typeof price === 'number') {
    return Math.round(price * 100) / 100
  }

  return price
}

export default router
