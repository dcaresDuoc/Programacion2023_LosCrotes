import jwt from 'jsonwebtoken';

// Define una clave secreta para firmar los tokens JWT
const secretKey = 'secret';

export default function handler(req, res) {
  // Verifica si el usuario está autenticado
  const token = req.cookies.Token;
  if (!token) {
    return res.json(null);
  }

  let decodedToken;
  try {
    // Decodifica y verifica el token JWT usando la clave secreta
    decodedToken = jwt.verify(token, secretKey);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Desestructura la propiedad decodedToken del objeto user
  const { decodedToken: user } = { decodedToken };
  const data = user.data
  const {nombre, correo_electronico} = data


  return res.status(200).json({ nombre, correo_electronico });
}