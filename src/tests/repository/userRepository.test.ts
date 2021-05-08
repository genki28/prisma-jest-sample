import { PrismaClient } from '@prisma/client'
import * as userRepository from '../../Repository/userRepository'

const prisma = new PrismaClient()
afterAll(async (done) => {
  await prisma.$disconnect
  done()
})

describe("user関係のテスト", () => {
  it("全て取得する", async (done) => {
    const users = await userRepository.getAllUser()
    const user = users[0]

    expect(user.email).toBe("alice@prisma.io")
    expect(user.posts[0].title).toBe("Check out Prisma with Next.js")
    expect(user.posts[0].content).toBe("https://www.prisma.io/nextJs")
    expect(user.posts[0].published).toBe(true)
    done()
  })
})