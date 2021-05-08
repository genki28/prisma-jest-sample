import express from 'express'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'
import path from 'path'

const app = express()
const nodeEnv = process.env.NODE_ENV
dotenv.config({ path: path.resolve(__dirname, `./config/.env.${nodeEnv}`)})

const PORT = process.env.PORT || 9090

app.get('/', (req, res, next) => {
    res.status(200).send({ data: 'hoge' })
})

app.use('/users', userRoutes)


const server = app.listen(PORT, () => {
    console.log(`🚀Runnning http://localhost:${PORT}`)
})

export { app, server }