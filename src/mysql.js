import mysql from "mysql"

const pool = mysql.createPool({
    "user": "root",
    "password": "hemaru12",
    "database": "node-mariadb",
    "host": "localhost",
    "port": 3306
})

export {pool}