import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react'
import{Icon} from 'react-icons-kit'

import {eye} from 'react-icons-kit/feather/eye'
  function PasswordReset() {
    const[icon, setIcon] = useState(eyeOff);
    const[type, setType] = useState('passsword');

    const handleToggle =()=>{
        if(type== 'password'){
          setIcon(eye);
          setType('text');
        }
        else{
          setIcon(eyeOff)
          setType('password')
        }
    }
    return (
      <div>
        <div className="avatar2">
            <img className="anh2" src="../src/img/Frame.png"></img>
      </div>
      <div className='logo-alta'>
            <img src="../src/img/logo.png"/>
        </div>
        <div>
          <form className='form-login'>
            <div  className='reset'>
            <span className="tx3">Đặt lại mật khẩu mới</span>
            <span className='ten3'>Mật khẩu</span>
            <span className='eye2' onClick={handleToggle}><Icon icon={icon} size={20}/></span>
          <input
              id="resetpass"
              type={type}
              name='password'
              required
            /> 
             </div>
             <div  className='resetnew'>
            <span className='ten4'>Nhập lại mật khẩu</span>
            <span className='eye3' onClick={handleToggle}><Icon icon={icon} size={20}/></span>
          <input
              id="resetpassnew"
              type={type}
              name='password'
              required
            />
           </div>
            <div>
              <button  className="btn3">Xác nhận</button>
            </div>
          </form>
            
          </div>
      </div>
    )
  }

  export default PasswordReset
  