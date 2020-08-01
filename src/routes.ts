import { Router } from 'express'

const router = Router()

router.post('/users', (req, res) => {
  return res.json({ message: 'shazam garai' })
})

export { router }