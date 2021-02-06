const express = require('express')
const Router = express.Router()

Router.get('/admin', (req, res) => {
  res.send('<form action="/posted" method="post"><input name="eil"></input><button type=""submit>Send</button></form>')
})

module.exports = Router