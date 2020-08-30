const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const { JWKS_URI, JWT_AUDIENCE, JWT_ISSUER, JWT_SIGNING_ALTHORITHMS } = require('../config')

const authCheck = jwt({
	secret     : jwks.expressJwtSecret({
		cache                 : true,
		rateLimit             : true,
		jwksRequestsPerMinute : 5,
		jwksUri               : JWKS_URI
	}),
	audience   : JWT_AUDIENCE,
	issuer     : JWT_ISSUER,
	algorithms : [
		'RS256'
	]
})

module.exports = {
	authCheck
}
