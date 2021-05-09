import { dateTimeScalar } from '../schema/graphqlScalar'
import { getAllUser, getUser } from '../Repository/userRepository'

export const resolvers = {
  DateTime: dateTimeScalar,

  Query: {
    users: async () => await getAllUser(),
    user: async (id: number) => await getUser(id)
  }
}