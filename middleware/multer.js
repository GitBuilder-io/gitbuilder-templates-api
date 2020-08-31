const multer = require('multer')
const fs = require('fs-extra')
const cwd = require('cwd')
const { TEMPLATES_DIR } = require('../config')

// Configure
const storage = multer.diskStorage({
	destination : (req, file, cb) => {
		const { lang } = req.query
		if (lang && lang.length > 0 && langDirExists(lang)) {
			cb(null, `${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/`)
		} else {
			cb(null, '')
		}
	},
	filename    : (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const langDirExists = (lang) => {
	return fs.pathExistsSync(`${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/`)
}

const uploader = multer({ storage: storage })

module.exports = uploader
