const { app } = require('./app')
const { PORT } = require('./config')

app.listen(PORT, () => console.log(`Gitbuilder-templates-api server listening on port ${PORT}`))
