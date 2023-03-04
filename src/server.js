import express from "express"
import { pool } from "./database.js"
import { v4 as uuid4 } from "uuid"
const app = express()
app.use(express.json())

/* app.post("/user", (req, res)=>{
    const {name, email, password} = req.body
    pool.getConnection((err: any, connection: any)=>{
        connection.query(
            'INSERT INTO users (user_id, name, email, password) VALUES (?,?,?,?)',
            [uuid4,name, email, password],
            (error: any, result: any, fields: any)=>{
                if(error){
                    return res.status(400).json(error)
                }
                res.status(200).json({success: true})

            }

        )
    })
    res.send("Servidor rodando")
}) */

app.post("/user", (req, res) => {
    const { name, email, password } = req.body
    pool.getConnection((err, connection) => {
        connection.query(
            'INSERT INTO users (user_id, name, email, password) VALUES (?,?,?,?)',
            [uuid4(), name, email, password],
            (error, result, fields) => {
                if (error) {
                    return res.status(400).json(error)
                }
                res.status(200).json({ success: true })

            }

        )
    })
    /* res.send("Servidor rodando") */
})
app.listen(4000)