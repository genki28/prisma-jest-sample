import { dateTimeScalar } from '../schema/graphqlScalar'
import { getAllUser, getUser, createUser } from '../Repository/userRepository'
import logger from '../logger/logger'
import { MutationCreateUserArgs } from '../@types/graphql'

export const resolvers = {
  DateTime: dateTimeScalar,

  Query: {
    users: async () => await getAllUser(),
    user: async (id: number) => await getUser(id)
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