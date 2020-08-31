const express = require('express')
const router = express.Router()
const { authCheck } = require('../middleware/auth')
const uploader = require('../middleware/multer')

// Controllers
const { getTemplate, uploadTemplate } = require('../controllers/templateController')

// Routes
router.get('/template', getTemplate)
router.post('/template', uploader.any(), uploadTemplate)

module.exports = router
