import express from 'express'
import notes from './routes/notes.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.json({ hello: 'World' })
})

notes(app)

const port = 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`)
})