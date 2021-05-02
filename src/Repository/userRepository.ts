import { PrismaClient } from '@prisma/client'
import logger from '../logger/logger'
const prisma = new PrismaClient()

export default {
  index: () => {
    logger.debug('とりあえずここまではOK')
    return prisma.user.findMany()
  }
}