const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	PORT             : process.env.PORT || 5000,
	TEMPLATES_DIR    : process.env.TEMPLATES_DIR || '/data/templates',
	JWKS_URI         : process.env.JWKS_URI || 'https://sykesdev.us.auth0.com/.well-known/jwks.json',
	JWT_AUDIENCE     : process.env.JWT_AUDIENCE || 'https://gitbuilder-io/',
	JWT_ISSUER       : process.env.JWT_ISSUER || 'https://sykesdev.us.auth0.com/',
	PUBLIC_ENDPOINTS : process.env.PUBLIC_ENDPOINTS || [
		'/template'
	]
}
