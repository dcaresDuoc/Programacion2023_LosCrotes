import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import useUser from '../../hooks/useUser'
import Image from "next/image"
import Bg from '../../public/bg.png'
import TextField from '@mui/material/TextField';
import Logo from '../../public/FindSome.png'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const router = useRouter()
  const { mutate } = useUser()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Validar los campos de entrada antes de enviar la solicitud
      if (!validateInputs()) {
        return;
      }

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

  const validateInputs = () => {
    let isValid = true;
    const errors = {};

    if (user.email.trim() === '') {
      errors.email = 'El correo electrónico es obligatorio';
      isValid = false;
    }

    if (user.password.trim() === '') {
      errors.password = 'La contraseña es obligatoria';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  return (
    <div className='auth'>
      <div className="logo-brand">
        <Link href='/'>
          <Image src={Logo} alt='logo de la empresa' width={100} height={60}/>
        </Link>
      </div>  
      <div className="bg-foto">
        <Image src={Bg} alt="Algo debe significar" width={900} height={400} />
      </div>
      <div className="bg-text">
        <h1>Bienvenido denuevo</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Ingresa usuario"
            name="email"
            value={user.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <button>Ingresar</button>
        </form>
        
        <button className='btn-register' onClick={() => router.push('/register')}>Registrate</button>
      </div>
    </div>
  )
}

export default Login