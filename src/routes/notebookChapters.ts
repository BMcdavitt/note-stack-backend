import * as express from 'express'
import { NotebookChapters } from '../../models/notebookChapters'

const router = express.Router()

router.get('/', async (req, res) => {
  const notebookChapters = await NotebookChapters.findAll()
  res.send(notebookChapters)
})

router.get('/:id', async (req, res) => {
  const notebookChapter = await NotebookChapters.findByPk(req.params.id)
  res.send(notebookChapter)
})

router.post('/', async (req, res) => {
  const notebookChapter = await NotebookChapters.create(req.body)
  res.send(notebookChapter)
})

router.put('/:id', async (req, res) => {
  await NotebookChapters.update(req.body, {
    where: { id: req.params.id },
  })
  res.send('OK')
})

router.delete('/:id', async (req, res) => {
  await NotebookChapters.destroy({
    where: { id: req.params.id },
  })
  res.send('OK')
})

export const notebookChapterRoutes = router
