// const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const adminRoute = require('./routes/admin')
const shopeRoute = require('./routes/shop')
const NotFound = require('./routes/notFound')

app.use(adminRoute)
app.use(shopeRoute)
app.use(NotFound)

// const server = http.createServer(app)
app.listen(3000)
// const server = http.createServer((req, res) => {
//   const url = req.url
//   if (url === '/') {
//     res.write('<html>')
//     res.write('<body><form action="/message" method="POST"> < input type = "text name="message"></input><button>send</button></form></body>')
//     res.write('</html>')
//     res.end()
//   }
//   res.setHeader('Content-Type', 'text/html')
//   res.write('<h1>hello from my server</h1>')
//   res.end()
// })
