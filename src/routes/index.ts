import { Router } from 'express'
import { notebookRoutes } from './notebook'
import { notebookChapterRoutes } from './notebookChapters'

const router = Router()

router.use('/notebook', notebookRoutes)
router.use('/notebookChapters', notebookChapterRoutes)

export const routes = router
