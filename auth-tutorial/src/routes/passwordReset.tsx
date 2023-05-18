import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react'
import{Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import { Password } from 'primereact/password';   

  function PasswordReset() {
    const[passsword, setPassword] = useState("")
    const[passswordNew, setPasswordNew] = useState("")

    const handlePasswordOnChange = (event: any) => {
      setPassword(event.target.value)
     
    }
     const handlePasswordNewOnChange= (event: any) => {
      setPasswordNew(event.target.value)
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
            <div id='resetpass'>
            <Password name='password' onChange={handlePasswordOnChange} toggleMask required/>
            </div>
             </div>
             <div  className='resetnew'>
            <span className='ten4'>Nhập lại mật khẩu</span>
            <div id="resetpassnew">
            <Password name='passwordnew' onChange={handlePasswordNewOnChange} toggleMask required/>
            </div>
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
  