import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Nico123',
  port: 3306,
  database: 'comunicaduoc'
})

export { pool }