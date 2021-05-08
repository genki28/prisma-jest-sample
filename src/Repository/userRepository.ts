import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export function getAllUser() {
  return prisma.user.findMany({include: {posts: true}})
}