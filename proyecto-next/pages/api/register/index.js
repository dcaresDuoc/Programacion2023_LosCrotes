import { pool } from '../../../config/db'

export default async function handler (req, res) {
    if(req.method !== 'POST'){
        res.status(405).json({message: 'Metodo no permitido'})
        return
    }

    const {name, lastname, email, password, address, phone} = req.body
    console.log(name, lastname, email, password, address, phone) 

    const [exist] = await pool.query('SELECT * FROM users WHERE email = ?', [email] )

    console.log(exist)
    if (exist.length === 0){
        await pool.query('Insert into users (`name`,`lastname`,`email`,`password`,`address`,`phone`) value (?,?,?,?,?,?)', [name, lastname, email, password, address, phone])
        return res.status(200).json({message: 'granted'})
        
    } else {
        return res.status(401).json({message: 'Este email esta registrado'})
    }


}