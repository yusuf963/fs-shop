const express = require('express')
const Router = express.Router()



Router.get('/not', (req, res) => {
  res.status(404).send('Page not Found')
})


module.exports = Router