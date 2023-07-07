// import { pool } from '../../../config/db';

// export default async function handler(req, res) {
//   const { query: { id }} = req;
  
//   try {
//     const [row] = await pool.query('SELECT id_profesional, nombre, correo, biografia, telefono, profesion, ciudad, region, comuna FROM profesionales WHERE id_profesional = ?', [id]);

//     if (!row) {
//       return res.status(404).json({ error: 'Professional not found' });
//     }

//     return res.status(200).json(row);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server Error' });
//   }
// }

import Profesionales from '../../../models/Profesionales';

export default async function handler(req, res) {
  const { query: { id } } = req;

  try {
    // Busca el profesional por su id utilizando Sequelize
    const profesional = await Profesionales.findOne({
      where: {
        id_profesional: id
      },
      attributes: ['id_profesional', 'nombre', 'correo', 'biografia', 'telefono', 'profesion', 'ciudad', 'region', 'comuna']
    });

    if (!profesional) {
      return res.status(404).json({ error: 'Professional not found' });
    }

    console.log([profesional])

    return res.status(200).json([profesional]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
}
