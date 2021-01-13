/**
 * main.ts
 *
 * Entrance to start up the server
 */

// config loading the selected .env file, must be on the top
import config from '@src/config'
// config loading the selected .env file, must be on the top

import app from '@src/app'

const port = config.APP_PORT
app.listen(port)

console.info('Using config:', config)
console.info(`Server listening at http://localhost:${port}`)
