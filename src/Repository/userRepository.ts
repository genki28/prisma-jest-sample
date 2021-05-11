import { PrismaClient } from '@prisma/client'
import { CreateUserInput } from '../@types/graphql'
const prisma = new PrismaClient()

export function getAllUser(page: number, perPage: number) {
  console.log(page, perPage)
  const pageData = page ? page : 1
  const perPageData = perPage ? perPage : 10
  return prisma.user.findMany(
    {
      skip: (pageData - 1) * perPageData,
      take: perPage,
      include: 
      {
        posts: true
      }
    }
  )
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