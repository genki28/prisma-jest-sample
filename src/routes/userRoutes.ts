import express from 'express'
import userController from '../controller/userControllers'
const router = express.Router()

router.get('/', userController.index)

export default router