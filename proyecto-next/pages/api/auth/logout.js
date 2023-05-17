import Cookies from 'js-cookie';

export default function handler(req, res) {
  // Eliminar la cookie 'Token'
  Cookies.remove('Token');

  // Enviar una respuesta JSON
  res.status(200).json({ message: 'Logout successful' });
}