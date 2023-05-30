import { pool } from '../../../config/db'

export default async function handler (req, res) {

  const [row] = await pool.query("Select nombre, slug, descripcion from profesion")
  return res.status(200).json(row)
}