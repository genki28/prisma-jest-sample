import { dateTimeScalar } from '../schema/graphqlScalar'
import { getAllUser, getUser, createUser } from '../Repository/userRepository'
import logger from '../logger/logger'
import { MutationCreateUserArgs } from '../@types/graphql'

export const resolvers = {
  DateTime: dateTimeScalar,

  Query: {
    // users: async (query: )  => {
    //   const users = await getAllUser(query.page, query.perPage)
    //   return {
    //     data: users,
    //     nextPage: true,
    //     prevPage: true
    //   }
    // },
    user: async (id: number) => await getUser(id),
    getPagenationUsers: async (_:any, query: { page: number, perPage: number}) => {
      const users = await getAllUser(query.page, query.perPage)
      return {
        data: users,
        nextPage: true,
        prevPage: true
      }
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs) => {
      try {
        const user = await createUser(args.data)
        return user
      } catch(e) {
        logger.debug(e.stack)
      }
    }
  }
}