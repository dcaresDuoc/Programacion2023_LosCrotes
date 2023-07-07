// import { pool } from '../../../config/db'
// import bcrypt from 'bcrypt'

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ message: 'Método no permitido' })
//     return
//   }

//   const { name, email, password, address, phone } = req.body

//   // Genera un hash de la contraseña
//   const hashedPassword = await bcrypt.hash(password, 10)

//   const [exist] = await pool.query('SELECT * FROM clientes WHERE correo_electronico = ?', [email])

//   if (exist.length === 0) {
//     await pool.query('INSERT INTO clientes (`nombre`, `correo_electronico`, `contrasena`, `telefono`, `direccion`) VALUES (?, ?, ?, ?, ?)', [name, email, hashedPassword, address, phone])
//     return res.status(200).json({ message: 'Registro exitoso' })
//   } else {
//     return res.status(401).json({ message: 'Este correo electrónico ya está registrado' })
//   }
// }

import bcrypt from 'bcrypt';
import Cliente from '../../../models/Cliente';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Método no permitido' });
    return;
  }

  const { name, email, password, address, phone } = req.body;

  try {
    // Genera un hash de la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Verifica si el cliente ya existe en la base de datos utilizando Sequelize
    const exist = await Cliente.findOne({
      where: {
        correo_electronico: email
      }
    });

    if (!exist) {
      // Crea un nuevo cliente utilizando Sequelize
      await Cliente.create({
        nombre: name,
        correo_electronico: email,
        contrasena: hashedPassword,
        telefono: phone,
        direccion: address
      });

      return res.status(200).json({ message: 'Registro exitoso' });
    } else {
      return res.status(401).json({ message: 'Este correo electrónico ya está registrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
}
