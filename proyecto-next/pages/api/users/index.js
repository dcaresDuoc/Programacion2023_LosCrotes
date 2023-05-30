import { pool } from '../../../config/db'

export default async function handler(req, res) {
  try {
    const [row] = await pool.query("SELECT nombre, correo, biografia, profesion, ciudad, region, comuna FROM profesionales");

    return res.status(200).json(row);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error de servidor" });
  }
}