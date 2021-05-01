import express from 'express'
const app = express()
const PORT = process.env.PORT || 9090

app.get('/', (req, res, next) => {
    res.status(200).send({ data: 'hoge' })
})


const server = app.listen(PORT, () => {
    console.log(`🚀Runnning http://localhost:${PORT}`)
})

export { app, server }