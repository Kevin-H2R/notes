import pool from '../services/mariadb.js'

export default function (app) {
    app.get('/notes', async (req, res) => {
        let rows = await pool.queryResult('SELECT * FROM notes ORDER BY creation_date DESC')
        res.json({ tasks: rows })
    })
}