import { verify } from 'jsonwebtoken'

export default function userHandler (req, res) {
    const { token } = req.cookies

    try {
      const user = verify(token, 'secret')
      console.log(user)
    } catch (e) {
      res.status(401).json({error: 'invalid token'})
    }

    res.json({
        user: 'user123'
    })
}