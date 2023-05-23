import { pool } from '../../../config/db'

export default async function handler (req, res) {
    if(req.method !== 'POST'){
        res.status(405).json({message: 'Metodo no permitido'})
        return
    }

    const {name, email, password, address, phone} = req.body
    console.log(name, email, password, address, phone) 

    const [exist] = await pool.query('SELECT * FROM clientes WHERE correo_electronico = ?', [email] )

    console.log(exist)
    if (exist.length === 0){
        await pool.query('Insert into clientes (`nombre`,`correo_electronico`,`contrasena`,`telefono`,`direccion`) value (?,?,?,?,?)', [name, email, password, address, phone])
        return res.status(200).json({message: 'granted'})
        
    } else {
        return res.status(401).json({message: 'Este email esta registrado'})
    }
}
