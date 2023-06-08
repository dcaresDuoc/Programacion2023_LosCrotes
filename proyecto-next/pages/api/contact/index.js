// import { pool } from '../../../config/db'

// export default async function handler (req, res) {
//     if(req.method !== 'POST'){
//         res.status(405).json({message: 'Metodo no permitido'})
//         return
//     }

//     const {name, email, message} = req.body
//     console.log(name, email, message) 

//     const [contact] = await pool.query('Insert into contact (`nombre`, `email`, `mensaje`) value (?, ?, ?)', [name, email, message] )
    
//     console.log(contact)

//     return res.status(200).json({message: 'Mensaje enviado'})


// }


import Contacto from '../../../models/Contacto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Método no permitido' });
    return;
  }

  const { name, email, message } = req.body;

  try {
    // Crea un nuevo contacto utilizando Sequelize
    await Contacto.create({
      nombre: name,
      email: email,
      mensaje: message
    });

    return res.status(200).json({ message: 'Mensaje enviado' });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor' });
  }
}
