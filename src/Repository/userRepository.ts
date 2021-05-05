import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  index: () => {
    return prisma.user.findMany()
  }
}