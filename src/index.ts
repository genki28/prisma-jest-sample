import express from 'express'
import userRoutes from './routes/userRoutes'
const app = express()
const PORT = process.env.PORT || 9090

app.get('/', (req, res, next) => {
    res.status(200).send({ data: 'hoge' })
})

app.use('/users', userRoutes)


const server = app.listen(PORT, () => {
    console.log(`🚀Runnning http://localhost:${PORT}`)
})

export { app, server }