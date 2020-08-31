const cwd = require('cwd')
const fs = require('fs-extra')
const { TEMPLATES_DIR } = require('../config')

const langDirExists = (lang) => {
	return fs.pathExistsSync(`${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/`)
}

const getTemplate = async (req, res, next) => {
	const { name, lang } = req.query
	const fullPath = `${TEMPLATES_DIR !== '/data/templates' ? cwd() : ''}${TEMPLATES_DIR}/${lang}/${name}.zip`

	try {
		console.log(`Sending ${fullPath}...`)
		res.status(200).sendFile(fullPath)
	} catch (err) {
		res.status(500).send(`Problem getting requested template... ${err}`)
		throw new Error(`Problem getting requested template...${err}`)
	}
}

const uploadTemplate = async (req, res, next) => {
	const files = req.files
	const { lang } = req.query
	if (lang && files.length > 0 && langDirExists(lang)) {
		console.log(`User uploaded: ${files[0].originalname} to ${TEMPLATES_DIR}/${lang}/`)
		res.status(200).send('Successfully uploaded!')
	} else {
		let langNotExists = !langDirExists(lang)
		console.log(`Error trying to upload file: ${files[0].originalname}`)
		res.status(500).send({
			message : `There was a problem uploading the file...(${langNotExists
				? 'Language not supported'
				: 'Unknown'})`
		})
	}
}

module.exports = {
	getTemplate,
	uploadTemplate
}
