import { pool } from '../../../config/db'

export default async function handler (req, res) {

  const [row] = await pool.query("SELECT * FROM profesionales")

  return res.status(200).json(row)
}
