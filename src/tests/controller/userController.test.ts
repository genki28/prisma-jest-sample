import { mockReq, mockRes } from 'sinon-express-mock'
import * as userController from '../../controller/userControllers'

describe('ユーザー画面のcontrollerテスト', () => {
  it('stage一覧画面の取得テスト', async(done) => {
    const response = {
      status: 200,
      responseData: [
        {
          email: 'alice@prisma.io',
          name: 'Alice',
          posts: [
            {
              title: 'Check out Prisma with Next.js',
              content: 'https://www.prisma.io/nextJs',
              published: true
            }
          ]
        },
        {
          email: 'bob@prisma.io',
          name: 'Bob',
          posts: [
            {
              title: 'Follow Prisma on Twitter',
              content: 'https://twitter.com/prisma',
              published: true
            },
            {
              title: 'Follow Nexus on Twitter',
              content: 'https://twitter.com/nexusgql',
              published: true,
            }
          ]
        }
      ]
    }

    const req = mockReq()
    const res = mockRes(response)
    const next = jest.fn()

    await userController.index(req, res, next)

    expect(res.status).toBe(200)
  })
})