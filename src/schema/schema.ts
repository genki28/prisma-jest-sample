import { gql } from 'apollo-server-express'

export const schema = gql`
  scalar DateTime

  type User {
    id: ID!
    email: String
    name: String
    posts: [Post]
    profile: Profile
  }

  type Profile {
    id: ID!
    bio: String
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
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    users: [User],
    user: User
  }
`