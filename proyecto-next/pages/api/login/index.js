import { pool } from '../../../config/db'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default async function handler (req, res) {

  if (req.method !== "POST"){
    res.status(405).json({ message: "Metodo no permitido"})
    return
  }

  const { email, password } = req.body

  const [row] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
  console.log(row)
  
  if (row.length === 0) res.status(401).json({ message: "El usuario no existe"})
  
  if (password !== row[0]["password"]) res.status(401).json({ message: "Contraseña incorrecta"})

  const token = jwt.sign({
    data: row,
    exp: Math.floor(Date.now() / 1000) + 60 * 60
  }, 'secret')

  const serialized = serialize('Token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60,
    path: '/' 
  })

  res.setHeader('Set-Cookie', serialized)

  return res.status(200).json(serialized)
}