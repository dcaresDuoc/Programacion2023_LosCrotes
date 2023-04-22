import { pool } from '../../../config/db'

export default async function handler (req, res) {

  if (req.method !== "POST"){
    res.status(405).json({ message: "Metodo no permitido"})
    return
  }

  const { email, password } = req.body
  console.log(email, password)

  const [row] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
  
  if (row.length === 0) res.status(401).json({ message: "El usuario no existe"})
  
  if (password !== row[0]["password"]) res.status(401).json({ message: "Contraseña incorrecta"})

  return res.status(200).json({ message: "correcto"})
}