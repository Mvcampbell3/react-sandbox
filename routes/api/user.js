const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ ok: true })
})

router.post('/login', (req, res) => {
  res.json({ ok: true, data: req.body })
})

module.exports = router;