let express = require('express')
var morgan = require('morgan')
let cors = require('cors')
let bodyParser = require('body-parser')
let entries = require('./entries')
const dotenv = require('dotenv')

dotenv.config()
let app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send('Hello from the profile backend!')
})

app.get('/entries', (_, res) => {
    res.json(entries.getEntries())
})

app.post('/entries', (req, res) => {
    console.log('Data received - ', req.body)
    entries.putEntry(req.body)
    console.log('Stored successfully!')
    res.sendStatus(200)
})

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Profile backend running on ${process.env.PORT} ...`)
})
