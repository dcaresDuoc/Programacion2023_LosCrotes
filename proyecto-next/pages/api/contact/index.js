import { pool } from '../../../config/db'

export default async function handler (req, res) {
    if(req.method !== 'POST'){
        res.status(405).json({message: 'Metodo no permitido'})
        return
    }

    const {name, email, message} = req.body
    console.log(name, email, message) 

    const [contact] = await pool.query('Insert into contact (`nombre`, `email`, `mensaje`) value (?, ?, ?)', [name, email, message] )
    
    console.log(contact)

    return res.status(200).json({message: 'Mensaje enviado'})


}