import { dateTimeScalar } from '../schema/graphqlScalar'
import { getUser, createUser, getCursorUsers, getOffsetUsers } from '../Repository/userRepository'
import logger from '../logger/logger'
import { MutationCreateUserArgs, QueryGetCursorUsersArgs, QueryGetOffsetUsersArgs } from '../@types/graphql'

export const resolvers = {
  DateTime: dateTimeScalar,

  Query: {
    user: async (id: number) => await getUser(id),
    getCursorUsers: async (_: any, query: QueryGetCursorUsersArgs) => {
      const [count, users] = await getCursorUsers(query)
      return {
        data: users,
        total: count
      }
    },
    getOffsetUsers: async (_: any, query: QueryGetOffsetUsersArgs) => {
      const [count, users] = await getOffsetUsers(query)
      return {
        data: users,
        total: count
      }
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs) => {
      try {
        const user = await createUser(args.data)
        return user
      } catch (e) {
        logger.debug(e.stack)
      }
    }
  }
}