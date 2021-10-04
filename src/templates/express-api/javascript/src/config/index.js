const dotenv = require('dotenv')
const path = require('path')

// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config({ path: path.join(__dirname, '.env.example') })

module.exports = {
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URI,
}
