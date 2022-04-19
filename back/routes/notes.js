import pool from '../services/mariadb.js'

export default function (app) {
    app.get('/notes', async (req, res) => {
        let rows = await pool.queryResult('SELECT * FROM notes ORDER BY create_date DESC')
        res.json({ notes: rows })
    })

    app.post('/notes', async (req, res) => {
        let content = req.body.content
        content = content.replaceAll('\n', '<br/>')
        let title = req.body.title
        if (title === undefined) {
            let today = new Date()
            title = `Note du ${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`
        }
        let result = 
            pool.query(`INSERT INTO notes (title, content, create_date, update_date) VALUES ("${title}", "${content}", NOW(), NOW())`)
        res.json({id: result.insertId})
    })

    app.post('/notes/save', async (req, res) => {
        let content = req.body.content
        content = content.replaceAll('\n', '<br/>')
        const id = req.body.id
        pool.query(`UPDATE notes SET content = "${content}" WHERE id = ${id}`)
        res.json({})
    })
}