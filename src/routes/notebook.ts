import * as express from 'express'
import { Notebook } from '../../models/notebook'

const router = express.Router()

router.get('/', async (req, res) => {
  const notebooks = await Notebook.findAll()
  res.send(notebooks)
})

router.get('/:id', async (req, res) => {
  const notebook = await Notebook.findByPk(req.params.id)
  res.send(notebook)
})

router.post('/', async (req, res) => {
  const notebook = await Notebook.create(req.body)
  res.send(notebook)
})

router.put('/:id', async (req, res) => {
  await Notebook.update(req.body, {
    where: { id: req.params.id },
  })
  res.send('OK')
})

router.delete('/:id', async (req, res) => {
  await Notebook.destroy({
    where: { id: req.params.id },
  })
  res.send('OK')
})

export const notebookRoutes = router
