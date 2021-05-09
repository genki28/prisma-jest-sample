import { dateTimeScalar } from '../schema/graphqlScalar'
import { getAllUser } from '../Repository/userRepository'

export const resolvers = {
  DateTime: dateTimeScalar,

  Query: {
    users: async () => await getAllUser()
  }
}