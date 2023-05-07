import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useState } from 'react'
import{Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
  function PasswordReset() {
    const[icon1, setIcon1] = useState(eyeOff);
    const[icon2, setIcon2] = useState(eyeOff);
    const[type1, setType1] = useState('passsword');
    const[type2, setType2] = useState('passsword');
    const[passsword, setPassword] = useState("")
    const[passswordNew, setPasswordNew] = useState("")
    const [eye1Click, setEye1Click] = useState(false)
    const [eye2Click, setEye2Click] = useState(false)

    const handlePasswordOnChange = (event: any) => {
      setPassword(event.target.value)
     
    }
     const handlePasswordNewOnChange= (event: any) => {
      setPasswordNew(event.target.value)
    }

    const handleToggle2 =()=>{
        setEye2Click(!eye2Click)
        console.log(eye2Click)
        if(eye2Click){
          setIcon2(eye);
          setType2('text');
        }
        else{
          setIcon2(eyeOff)
          setType2('password')
        }
    }

    const handleToggle1 =()=>{
      setEye1Click(!eye1Click)
      if(eye1Click){
        setIcon1(eye);
        setType1('text');
      }
      else{
        setIcon1(eyeOff)
        setType1('password')
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
          <input
              id="resetpass"
              type={type1} 
              name='password'
              required
              value={passsword}
              onChange={handlePasswordOnChange}
            /> 
            <span className='eye3' onClick={handleToggle1}><Icon icon={icon1} size={20}/></span>
             </div>
             <div  className='resetnew'>
            <span className='ten4'>Nhập lại mật khẩu</span>
          <input
              id="resetpassnew"
              type={type2}
              name='passwordnew'
              required
              value={passswordNew}
              onChange={handlePasswordNewOnChange}
            />
            <span className='eye2' onClick={handleToggle2}><Icon icon={icon2} size={20}/></span>
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
  