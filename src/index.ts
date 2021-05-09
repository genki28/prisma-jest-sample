import express from 'express'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema/schema'
import { resolvers } from './resolvers/resolvers'

const app = express()
const nodeEnv = process.env.NODE_ENV
dotenv.config({ path: path.resolve(__dirname, `./config/.env.${nodeEnv}`)})

const PORT = process.env.PORT || 9090

app.use('/users', userRoutes)

const graphQLServer = new ApolloServer({ typeDefs: schema, resolvers });
graphQLServer.applyMiddleware({ app })

const server = app.listen(PORT, () => {
    console.log(`🚀Runnning http://localhost:${PORT}`)
    console.log(`🚀Running GraphQLServer http://localhost:${PORT}/graphql`)
})

export { app, server }