import express from 'express'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'
import path from 'path'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express()
const nodeEnv = process.env.NODE_ENV
dotenv.config({ path: path.resolve(__dirname, `./config/.env.${nodeEnv}`)})

const PORT = process.env.PORT || 9090

app.use('/users', userRoutes)

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello world!!',
    }
}

const graphQLServer = new ApolloServer({ typeDefs, resolvers });
graphQLServer.applyMiddleware({ app })

const server = app.listen(PORT, () => {
    console.log(`🚀Runnning http://localhost:${PORT}`)
    console.log(`🚀Running GraphQLServer http://localhost:${PORT}/graphql`)
})

export { app, server }