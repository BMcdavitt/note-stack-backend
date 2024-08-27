import { Router } from 'express'
import { notebookRoutes } from './notebook'

const router = Router()

router.use('/notebook', notebookRoutes)

export const routes = router
