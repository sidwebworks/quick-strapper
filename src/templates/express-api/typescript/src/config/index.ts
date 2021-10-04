import dotenv from 'dotenv'
import path from 'path'

// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config({ path: path.join(__dirname, '.env.example') })

export default {
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URI,
}
