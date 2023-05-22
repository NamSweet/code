
import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import '../css/App.css'
import { Link } from 'react-router-dom';
import{Icon} from 'react-icons-kit'
import {notification} from 'react-icons-kit/icomoon/notification'
import { Password } from 'primereact/password';

const defaultFormFields = {
  email: '',
  password: '',
}
const stylesTrue = {
  border: "1px solid red"
}

const stylesFalse = {
  border: "none"
}

function Home() 
{

  const[Notification] = useState(notification);
  const [isFalse,setIsFalse] = useState(false)
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()
//

   //
  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }
//
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const userCredential = await signInUser(email, password)

      if (userCredential) {
        setIsFalse(false)
        resetFormFields()
        navigate('/dashboard  ')
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
      setIsFalse(true)
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }
  
  return(
    
    <div className="App">
      <div className="card">
      <div className="avatar">
            <img className="anh" src="../src/img/Group 341.png"></img>
          <span className="hethong">Hệ thống</span>
     <span className="quanly">QUẢN LÝ XẾP HÀNG</span>
      </div>
        <div className='logo-alta'>
            <img src="../src/img/logo.png"/>
        </div>
        <form className='form-login' onSubmit={handleSubmit}>
          <div className='login-email'>
           <span className='ten2'>Tên đăng nhập*</span>
            <input
             id='username'
              name="email"
              style={isFalse ? stylesTrue : stylesFalse}  
              value={email}
              onChange={handleChange}
              required
            />
          </div >
          <div className='login-pass'>
          <span className='ten2'>Mật khẩu*</span>
          <Password name='password' onChange={handleChange} toggleMask required/>
          </div>
          {isFalse ? (
            <p className='forgotPassword'><Icon className='icon2' icon={Notification} size={15}/> Sai mật khẩu hoặc tên đăng nhập</p>
          ) : (
            <Link className='forgotPassword' to='/forgotPassword'>Quên mật khẩu?</Link>
       
          )}
          <div>
          </div>
          <button type='submit' className='submit'>Đăng nhập</button>
          {isFalse &&  
            <Link className='forgotPassword forgotPasswordFalse' to='/forgotPassword'>Quên mật khẩu?</Link>
         }
        </form>
      </div>
    </div>
    
  )
}

export default Home;
