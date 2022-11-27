const express = require('express')
const router = express.Router()
const mysql = require('./db')
const wrapsync = require('../../middleware/wrapasync')
let ipAddr = ''

router.get('/admin/userlist', wrapsync(async (req, res) => {   
  if (req.session.auth) {
    const conn = await mysql.getConnection()
    conn.release()
    const users = await conn.query('SELECT id, email, pass, level FROM users ORDER BY id DESC')
    res.json({code: 200,  users: users })
  } 
}))
router.post('/admin/deleteuser', wrapsync(async (req, res) => {   
  if (req.session.auth) {
    const conn = await mysql.getConnection()
    conn.release()
    await conn.query('DELETE FROM users WHERE id = ?', [req.body.id])
    const users = await conn.query('SELECT id, email, pass, level FROM users ORDER BY id DESC')
    res.json({code: 200,  users: users })
  } 
}))
module.exports = router