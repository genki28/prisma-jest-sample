import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  for await(const num of [...Array(50).keys()]) {
    await prisma.user.upsert({
      where: { id: num + 1},
      update: {
        name: 'Bob',
      },
      create: {
        email: `bob${num + 1}@prisma.io`,
        name: 'Bob',
        posts: {
          create: [
            {
              title: 'Follow Prisma on Twitter',
              content: 'https://twitter.com/prisma',
              published: true,
            },
            {
              title: 'Follow Nexus on Twitter',
              content: 'https://twitter.com/nexusgql',
              published: true,
            }
          ]
        }
      }
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    process.exit()
  })