import pool from '../services/mariadb.js'

export default function (app) {
    app.get('/notes', async (req, res) => {
        let rows = await pool.queryResult('SELECT * FROM todo ORDER BY creation_date DESC')
        rows.map(r => {
            r.done = r.done === 1
            return r
        })
        res.json({ tasks: rows })
    })
}