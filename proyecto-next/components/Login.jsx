import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
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
      const res = await axios.post('/api/login', user)
      window.localStorage.setItem('user', JSON.stringify(user))
      router.push('/')
    } catch (err) {
      // setError(err.response.data.error)
      console.error(err)
    }
  }

  console.log(user)

  return (
      <div className='auth'>
        <h1>Ingresar</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingresa usuario' name='username' onChange={handleChange}/>
          <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
          <button>Ingresar</button>
          {err && <p>{err}</p>}
          
          <span><Link href='/register'>Registrate</Link></span>
        </form>
    </div>
  )
}

export default Login