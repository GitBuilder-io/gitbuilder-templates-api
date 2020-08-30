const express = require('express')
const router = express.Router()
const { authCheck } = require('../middleware/auth')

// Controllers
const { getTemplate, uploadTemplate } = require('../controllers/templateController')

// Routes
router.get('/template', getTemplate)
router.post('/template', authCheck, uploadTemplate)

module.exports = router
