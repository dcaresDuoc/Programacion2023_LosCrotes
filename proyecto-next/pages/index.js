import React from 'react'
import {Navbar, Hero, InfoBrand,
  About, Footer} from '../components/index'
import axios from 'axios'


const index = ({data}) => {
  return (
    <div className='app'>
      <Navbar data={data}/>
      <Hero />
      <About />
      <InfoBrand />
      {/* <Footer data={data}/> */}
    </div>
  )
}

export default index

// export const getServerSideProps = async () => {
//   const res = await axios.get('http://localhost:3000/api/users')
//   const data = await res.data
  
//   return {
//     props: {
//       data
//     }
//   }
// } 