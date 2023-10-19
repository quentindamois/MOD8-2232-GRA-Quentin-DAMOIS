import express from 'express'
import validator from '../../validators/book-validator.js'
import repository from '../../persistence/book-repository.js'
import createPaginator from '../../utility/paginator.js'
import authenticationRepository from '../../persistence/authentication-repository.js'
import authorizerRepository from '../../persistence/authorizer-repository.js'
const authentication = authenticationRepository()
const router = express.Router()

// GET request handler for /books endpoint (public)
router.get('/books', async (req, res, next) => {
  try {
    // Validate request parameters, and return null if valid or error if invalid
    const options = { search: req.query.search, pagination: { page: req.query.page, size: req.query.size } }
    const err = validator.validateFindBooks(options)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const count = await repository.getBookCount(options)

    const paginator = createPaginator(10, 100) // Create paginator with default page size 10, max page size 100
    const pagination = paginator.createPagination(options.pagination.page, options.pagination.size, count) // Create pagination
    options.pagination = pagination

    const books = await repository.findBooks(options) // Find books in database table based on search and pagination

    const links = paginator.createPageLinks(pagination, req.baseUrl + req.path, req.query) // Create page links to first/previous/next/last pages
    res.status(200).json({ books, pagination, links }) // Send 200 response with books, pagination, and links in JSON body
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// POST request handler for /books endpoint (authenticated + authorized)
router.post('/books', authenticationRepository(), authenticationRepository.checkAuthorization('librarian'), async (req, res, next) => {
  try {
    // TODO
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const pageCount = req.body.pageCount
    const description = req.body.description
    const err = validator.validateCreateBook(title, author, year, pageCount, description)
    
  } catch (err) {
    res.status(400).json({ error: { message: 'invalide parameter' } })
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
  result = await repository.createBook(title, author, year, pageCount, description)
  res.sendStatus(201)
})

// GET request handler for /books/:id endpoint (public)
router.get('/books/:id', async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateFindBook(id)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const book = await repository.findBook(id) // Find book by id in database table
    if (book) {
      res.status(200).json({ book }) // Send 200 response with book in body
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// PUT request handler for /books/:id endpoint (authenticated + authorized)
router.put('/books/:id',  authenticationRepository(), authenticationRepository.checkAuthorization('librarian'), async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const pageCount = req.body.pageCount
    const description = req.body.description

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateReplaceBook(id, title, author, year, pageCount, description)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    // Update book in database table
    const updated = await repository.updateBook(id, title, author, year, pageCount, description)
    if (updated) {
      res.sendStatus(200) // Send 200 response indicating book was successfully updated
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// PATCH request handler for /books/:id endpoint (authenticated + authorized)
router.patch('/books/:id',  authenticationRepository(), authenticationRepository.checkAuthorization('librarian'), async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)
    const title = req.body.title
    const author = req.body.author
    const year = req.body.year
    const pageCount = req.body.pageCount
    const description = req.body.description

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateUpdateBook(id, title, author, year, pageCount, description)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    // Update book in database table
    const updated = await repository.updateBook(id, title, author, year, pageCount, description)
    if (updated) {
      res.sendStatus(200) // Send 200 response indicating book was successfully updated
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

// DELETE request handler for /books/:id endpoint (authenticated + authorized)
router.delete('/books/:id', authenticationRepository(), authenticationRepository.checkAuthorization('librarian'), async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id)

    // Validate request parameters, and return null if valid or error if invalid
    const err = validator.validateDeleteBook(id)
    if (err) {
      err.status = 400 // Set error status to 400
      return next(err) // Pass error to next error handler middleware and return
    }

    const deleted = await repository.deleteBook(id) // Delete book from database table
    if (deleted) {
      res.sendStatus(200) // Send 200 response indicating book was successfully deleted
    } else {
      next() // Pass request to next request handler or middleware
    }
  } catch (err) {
    // Catch any internal server error
    next(err) // Pass error to next error handler middleware
  }
})

export default router
