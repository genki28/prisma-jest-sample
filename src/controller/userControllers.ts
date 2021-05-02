import express from 'express'
import userRepository from '../Repository/userRepository'

export default {
  index: async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const users = await userRepository.index()
      res.status(200).send({ status: 200, data: users })
    } catch(e) {
      console.error(e) // とりあえずconsoleエラー
      next()
    }
    // res.send('test')
  }
}