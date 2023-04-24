
import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import '.././App.css'

const defaultFormFields = {
  email: '',
  password: '',
}

function Home() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const userCredential = await signInUser(email, password)

      if (userCredential) {
        resetFormFields()
        navigate('/profile')
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }

  return(
    <div className="App">
      <div className="card">
        <div className='logo-alta'>
            <img src="../src/img/logo.png"/>
        </div>
        <div className='avatar'>
            <img src="../src/img/Group 341.png" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='login-email'>
           
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div >
          <div className="login-password">
         
            <input
              id="username"
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
          <button className='submit'>Đăng nhập</button>
          </div>
        </form>
      </div>
     
    </div>
    
  )
}

export default Home
