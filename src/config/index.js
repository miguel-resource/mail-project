require('dotenv').config();

const config = { 
    dev: process.env.NODE_ENV !== 'production',
    port: 3000,
    cors: process.env.CORS,
    mail: process.env.EMAIL,
    pass: process.env.PASS,
}

module.export = { config: config} ;