import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import useUser from '../../hooks/useUser'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const router = useRouter()
  const { mutate } = useUser()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/api/auth/login', user)
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido Persona',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        // Actualizar el estado del usuario en useUser después del inicio de sesión exitoso
        mutate()
        router.push('/')
      })
      
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: 'error',
        title: err.response.data.message
      })
    }
  }

  return (
    <div className='auth'>
      <h1>Ingresar</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa usuario' name='email' onChange={handleChange} />
        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
        <button>Ingresar</button>
        
        <span><Link href='/register'>Registrate</Link></span>
      </form>
    </div>
  )
}

export default Login
