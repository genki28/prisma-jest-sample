import { gql } from 'apollo-server-express'
import { dateTimeScalar } from './graphqlScalar'

export const schema = gql`
  type User {
    id: ID!
    email: String
    name: String?
    posts: [Post]
    profile: Profile?
  }

  type Profile {
    id: ID!
    bio: String?
    user: User
    userId: Int
  }

  type Post {
    id: ID!
    title: String
    content: String
    published: Boolean
    author: User
    authorId: Int
    createdAt: dateTimeScalar
    updatedAt: dateTimeScalar
  }
`