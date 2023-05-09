import jwt from 'jsonwebtoken';
// Define una clave secreta para firmar los tokens JWT

export default function handler(req, res) {
  // Verifica si el usuario está autenticado
  const token = req.cookies.Token
  let decodedToken;

  try {
    // Decodifica y verifica el token JWT usando la clave secreta
    decodedToken = jwt.verify(token, 'secret');
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Devuelve los datos del usuario actual (aquí se pueden cambiar los datos de usuario que se deseen)
  const user = {decodedToken}

  return res.status(200).json({ user });
}
