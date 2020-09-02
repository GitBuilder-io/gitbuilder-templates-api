const multer = require('multer')
const cwd = require('cwd')
const fs = require('fs-extra')
const { TEMPLATES_DIR } = require('../config')

// Configure
const storage = multer.diskStorage({
	destination : (req, file, cb) => {
		const { lang } = req.query
		cb(null, `${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/`)
	},
	filename    : (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const uploader = multer({
	storage    : storage,
	fileFilter : (req, file, cb) => {
		const { lang } = req.query

		if (!file.originalname.endsWith('.zip')) {
			return cb(new Error(`Only *.zip files are allowed!`))
		}

		if (
			!lang ||
			!fs.pathExistsSync(`${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/`)
		) {
			return cb(new Error(`Language not selected or not supported!`))
		}

		cb(null, true)
	}
})

module.exports = {
	uploader
}
