import express from 'express'
import userRepository from '../Repository/userRepository'
import logger from '../logger/logger'

export async function index(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const users = await userRepository.index()
    res.status(200).send({ status: 200, data: users })
  } catch(e) {
    next(e)
    logger.debug(e)
  }
}