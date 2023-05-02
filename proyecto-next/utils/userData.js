import axios from 'axios'

export async function userData() {
  const res = await axios.get('http://localhost:3000/api/users')
  
  return res.data
}
