import express from 'express'
import health from './health.js'
import auth from './auth.js'
import products from './products.js'

// Create global /api/v1 router
const router = express.Router()

router.use(health)
router.use(auth)
router.use(products)

// Export global router, to be imported by /server/index.js and mounted to the Express app relative to path /api/v1
export default router
