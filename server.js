const express = require('express')
const next = require('next')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.get('/api/test', (req, res) => {
    res.json({success: true, message: 'GET request completed.'})
})

app.post('/api/test', (req, res) => {
    res.json({success: true, message: 'POST request completed.'})
})

app.patch('/api/test', (req, res) => {
    res.json({success: true, message: 'PATCH request completed.'})
})

const port = 3000
const server = next({ dev:true, port })
const handle = server.getRequestHandler()
server.prepare().then(() => {
    app.all('*', (req, res) => {
        return handle(req, res)
    })
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})