const { randomBytes } = require('crypto')

process.stdout.write(`AUTHORIZATION KEY : ${randomBytes(3 * 8).toString('base64')}\n`)
