import { pool } from '../../../config/db';

export default async function handler(req, res) {
  const { query: { slug }} = req;

  console.log(slug)
  
  try {
    const [row] = await pool.query("select p.id_profesional, p.nombre, p.correo, p.biografia, p.profesion, p.ciudad, p.region, p.comuna, pro.slug from profesionales p join profesion pro on (p.id_profesion = pro.id_profesion)  WHERE pro.slug = ?", [slug]);

    console.log(row)

    if (!row) {
      return res.status(404).json({ error: 'Professional not found' });
    }

    return res.status(200).json(row);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
}
