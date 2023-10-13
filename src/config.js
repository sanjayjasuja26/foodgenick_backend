require('dotenv').config({
    path: '.env'
})
module.exports = {
    port: Number(process.env.PORT),
    db: {
        db_host: process.env.DB_HOST || '',
        user: process.env.DB_USER || '',
        password: process.env.PASSWORD || '',
        database: process.env.DATABASE || '',
        ssl: process.env.DB_SSl || '',
        db_port: process.env.DB_PORT || '',
    },
    jwtSecret: process.env.JWT_SECRET,
    audience: process.env.AUDIENCE,
    algorithm: process.env.ALGORITHM,
    mailChimpKey: process.env.MAILCHIMPAPI_KEY,
    server_Key: process.env.SERVER_KEY
}