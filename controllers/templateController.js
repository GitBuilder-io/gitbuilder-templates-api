const cwd = require('cwd')
const { TEMPLATES_DIR } = require('../config')

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
	res.status(200).send('Success!')
}

module.exports = {
	getTemplate,
	uploadTemplate
}
