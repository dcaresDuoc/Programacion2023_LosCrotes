import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const router = useRouter()


  const { err, setError } = useState(null)

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value })
  }


  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/api/login', user)
      window.localStorage.setItem('user', JSON.stringify(user))
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido Persona',
        timer: 1500,
        showConfirmButton: false
      }).then((response) => {
        if(response){
          router.push('/')
        }
      })
      
    } catch (err) {
      // setError(err.response.data.error)
      console.error(err)
      Swal.fire({
        icon: 'error',
        title: err.response.data.message
      })
    }
  }

  console.log(user)

  return (
      <div className='auth'>
        <h1>Ingresar</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingresa usuario' name='email' onChange={handleChange}/>
          <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
          <button>Ingresar</button>
          {err && <p>{err}</p>}
          
          <span><Link href='/register'>Registrate</Link></span>
        </form>
    </div>
  )
}

export default Login