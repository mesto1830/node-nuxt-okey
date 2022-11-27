const express = require('express')
const router = express.Router()
const Cryptr = require('cryptr')
const mysql = require('./db')
const cryptr = new Cryptr('myTotalySecretKey')
let ipAddr = ''

router.post('/register', async (req, res) => {     
  const conn = await mysql.getConnection()
  conn.release()
  const email = await conn.query('SELECT email FROM users WHERE email = ? LIMIT 1', [req.body.email])
  if (email[0].length > 0) {
    res.json({code: 400, message: 'Bu hesap kullanılmıstır!'})
  }else {
    var newUser = {
      email: req.body.email,
      pass: req.body.pass,
      level: 0
    }
    await conn.query('INSERT INTO users SET ?', [newUser])
    res.json({code: 200, message: 'Hediyeniz gün içinde yüklenecektir.'})
  }
})
module.exports = router