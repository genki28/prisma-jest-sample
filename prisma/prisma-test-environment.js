const dotenv = require('dotenv')
const NodeEnvironment = require('jest-environment-node')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
  }

  async setup() {
    const nodeEnv = process.env.NODE_ENV
    const env = dotenv.config({ path: path.resolve(__dirname, `../src/config/.env.${nodeEnv}`)})

    await exec('yarn prisma db push --prebview-feature --accept-data-loss')
    await exec('yearn prisma generate')
    await exec('yarn prisma db seed --preview-feature')

    return super.setup()
  }
}

module.exports = PrismaTestEnvironment