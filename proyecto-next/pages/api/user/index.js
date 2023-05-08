import jwt from 'jsonwebtoken';
// Define una clave secreta para firmar los tokens JWT

export default function handler(req, res) {
  // Verifica si el usuario está autenticado
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  const currentToken = req.cookies.Token
  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    // Decodifica y verifica el token JWT usando la clave secreta
    decodedToken = jwt.verify(token, 'secret');
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Devuelve los datos del usuario actual (aquí se pueden cambiar los datos de usuario que se deseen)
  const user = {decodedToken};

  res.status(200).json({ user });
}