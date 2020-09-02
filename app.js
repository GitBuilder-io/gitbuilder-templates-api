const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { mainLimiter } = require('./middleware/rateLimiter')
const { authCheck } = require('./middleware/auth')
const { PUBLIC_ENDPOINTS } = require('./config')

// setup
const app = express()
const routes = require('./routes')

// configure
app.set('trust proxy', 1)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Add API-wide middleware
app.use(mainLimiter)
app.use(authCheck.unless({ path: PUBLIC_ENDPOINTS, method: 'GET' }))

// Catch and handle error where invalid or no auth token supplied to protected endpoints
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(err.status).send({
			message :
				'This is a protected endpoint...please use a valid OAuth2.0 token in your request header to access this endpoint.'
		})
		return next('Invalid Auth Token...blocking request')
	} else if (err.name === 'Error') {
		res.status(err.status).send({
			message : err.message
		})
	}
})

app.use('/api', routes)

module.exports = {
	app
}
