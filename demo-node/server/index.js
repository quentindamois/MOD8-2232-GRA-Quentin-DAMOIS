import express from 'express'
import {dirname, join } from 'path'
import {fileURLToPath} from 'url'
import logger from 'morgan'
import helmet from 'helmet'
import { randomUUID } from 'crypto'
import filmService from './services/film-service.js'
// Create Express application object
const app = express()
const port = 3000

app.use((req, res, next) => {
    req.id = randomUUID()
    next()
})
app.use((req, res, next) => {
    const id = req.id
    console.log(`Request: ${id}`)
    next()
})
// Morgan request logger middleware
app.use(logger('dev'))

app.use(helmet()) // Helmet security middleware

// Express JSON-parsoing middleware
app.use(express.json());



const clientBuildPath = join(dirname(fileURLToPath(import.meta.url)), '../client/dist')

app.use(express.static(clientBuildPath))

app.use((er, req, res, next) => {
    console.error(err)
    const status = err.status ?? 500
    const message = status >= 500 ? 'Something went wrong.' : err.message
    res.status(status).json({ error: { message } })
})

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ status: "Healthy" })
})

// GET request handler for /films endpoint
app.get('/api/v1/films', (req, res) => {
    const films = filmService.findFilms()
    res.status(200).json({ films })
})
app.get('/api/v1/films/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id)
    if (!Number.isInteger(id)) {
        const err = new Error(`Invalid fil id '${ req.params.id}'`)
        err.status = 400
        return next(err)
    }
    const film = filmService.findFilm(id)
    if (film) {
        res.status(200).json({ film })
    }
    else {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})