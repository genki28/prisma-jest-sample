import { PrismaClient } from '@prisma/client'
import { CreateUserInput, QueryGetCursorUsersArgs, QueryGetOffsetUsersArgs } from '../@types/graphql'
const prisma = new PrismaClient()

export function getAllUser() {
  return prisma.user.findMany(
    {
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

export function getCursorUsers(query: QueryGetCursorUsersArgs) {
  const cursor = query.cursor ? query.cursor : 1
  const take = query.pageItem ? query.pageItem : 10 // デフォルト設定

  return Promise.all([
    prisma.user.count(),
    prisma.user.findMany({
      take: take,
      skip: cursor === 1 ? 1 : 0,
      cursor: {
        id: cursor
      }
    })
  ])
}

export function getOffsetUsers(query: QueryGetOffsetUsersArgs) {
  const take = query.pageItem ? query.pageItem : 10 // デフォルト設定
  const skip = query.page ? (query.page - 1) * take : 0
  return Promise.all([
    prisma.user.count(),
    prisma.user.findMany({
      take: take,
      skip: skip
    })
  ])
}