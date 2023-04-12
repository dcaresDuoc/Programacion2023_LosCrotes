import React from 'react'

const register = () => {
  return (
    <div className='container-reg'>
      <form className=''>
        <input type="text" placeholder="username"/>
        <input type="email" placeholder="mail"/>
        <input type="password" placeholder='password'/>
      </form>
    </div>
  )
}

export default register