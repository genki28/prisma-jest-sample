import { PrismaClient } from '@prisma/client'
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