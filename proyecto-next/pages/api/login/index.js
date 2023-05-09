import { pool } from '../../../config/db'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'


async function authenticate(email, password) {
  const [row] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
  
  if (row.length === 0) {
    throw new Error("El usuario no existe")
  }
  
  // Validar la contraseña utilizando una librería de hashing de contraseñas
  if (password !== row[0]["password"]) {
    throw new Error("Contraseña incorrecta")
  }

  return row
}
export default async function handler (req, res) {
  if (req.method !== "POST") {
    res.status(405).end()
    return
  }

  try {
    const { email, password } = req.body

    console.log(req.body)

    const user = await authenticate(email, password)
    console.log(user)

    const token = jwt.sign({
      data: user,
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
    res.status(200).end()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}