import express from 'express'
import notes from './routes/notes.js'
import cors from 'cors'
const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  res.json({ hello: 'World' })
})

notes(app)

const port = 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`)
})