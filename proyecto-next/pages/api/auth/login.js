import { pool } from '../../../config/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

async function authenticate(email, password) {
  const [row] = await pool.query("SELECT nombre, correo_electronico, contrasena FROM clientes WHERE correo_electronico = ?", [email])

  if (row.length === 0) {
    throw new Error("El usuario no existe")
  }

  const hashedPassword = row[0].contrasena

  // Compara la contraseña proporcionada con el hash almacenado utilizando bcrypt.compare
  const passwordMatch = await bcrypt.compare(password, hashedPassword)

  if (!passwordMatch) {
    throw new Error("Contraseña incorrecta")
  }

  return {
    nombre: row[0].nombre,
    correo_electronico: row[0].correo_electronico
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end()
    return
  }

  try {
    const { email, password } = req.body
    const user = await authenticate(email, password)

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