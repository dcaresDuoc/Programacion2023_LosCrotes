'use client'
import { useState } from 'react'


const Register = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  })

  const handleChange = ({target: {name, value}}) => {
    setFormData ({...formData, [name]: value})
  } 

  const handleFormSubmit = () => {
    setStep(step + 1)
  }

  const handleFormBack = () => {
    setStep(step - 1)
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }


  console.log(formData)
  console.log(step)

  return (
    <div className='section-register'>
      <div className="progress-bar-container">
        <div className="progressStep active"></div>
        <div className={`progressStep ${step >= 2 && `active step-${2}`}`}></div>
        <div className={`progressStep ${step >= 3 && `active step-${3}`}`}></div>
        <div className={`progressStep ${step === 4 && `active step-${4}`}`}></div>
      </div>
      <div className="form-container">

        {step === 1 && (
          <form onSubmit={handleFormSubmit}>
            <h1>Informacion personal:</h1>
              <input type="text" name="name"  placeholder="Ingresa tu nombre" onChange={handleChange} required/>
              
              <input type="text" name="lastname"  placeholder='Ingresa tu apellido' onChange={handleChange} required/>

              {/* <input type="text" name='profesion' placeholder='Ingresa el nombre de tu profesion' oncChange={handleChange}/> */}
            <button type="submit">Next</button>
          </form>
          
        )}
        {step === 2 && (
          <form onSubmit={handleFormSubmit}>
            <h1>Information Digital:</h1>

              <input type="email" name="email"  placeholder="Ingresa tu email" onChange={handleChange} required/>

              <input type="password" name="password" placeholder="Ingresa una contraseña" onChange={handleChange} required/>
            
            <button type="submit">Next</button>
            <button onClick={handleFormBack}>Atras</button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleFormSubmit}>
            <h1>Datos de contacto:</h1>
              <input type="text" name="address"  placeholder='Ingresa tu direccion' onChange={handleChange}/>

              <input type="tel" name="phoneNumber" placeholder='Ingresa tu telefono' onChange={handleChange}/>
            <button type="submit">Next</button>
            <button onClick={handleFormBack}>Atras</button>
          </form>
        )}

        {step === 4 && (
          <form onSubmit={handleRegisterSubmit}>
            <h2>Confirmación de envío</h2>
            <p>Por favor, revise que la siguiente información sea correcta:</p>
            <p>Nombre: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Número celular: {formData.phoneNumber}</p>

            <button type="submit">Enviar</button>
            <button onClick={handleFormBack}>Atras</button>
          </form>
        )}

        
      </div>
    </div>
  )
}

export default Register