import { PrismaClient } from '@prisma/client'
import { CreateUserInput } from '../@types/graphql'
const prisma = new PrismaClient()

export function getAllUser() {
  return prisma.user.findMany({include: {posts: true}})
}

export function getUser(id: number) {
  return prisma.user.findUnique({
    where: {
      id: id
    },
    include: {
      posts: true
    }
  })
}

export function createUser(data: CreateUserInput) {
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name
    }
  })
}