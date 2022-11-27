const express = require('express')
const router = express.Router()
const mysql = require('./db')
const wrapsync = require('../../middleware/wrapasync')

router.post('/admin', wrapsync(async(req, res) => {     
  if (req.body.user) {
    const conn = await mysql.getConnection()
    conn.release()
    const result = await conn.query('SELECT user, pass FROM admin WHERE user = ? LIMIT 1', [req.body.user])
    if (result[0].length > 0) {
      if (result[0][0].pass == req.body.pass) {
        req.session.auth = result[0][0]
        res.json({code: 200, auth: result[0][0]})
      }else{
        res.json({code:400})
      }
    } else {
      res.json({code: 400})
    }
  } 
}))
router.get('/logout', wrapsync(async (req, res) => {
  delete req.session.auth
  res.json({ ok: true })
}))
module.exports = router