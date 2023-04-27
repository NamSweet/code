import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
  function ForgotPassword() {
  const navigate = useNavigate()
    return (
      <div>
        <div className="avatar2">
            <img className="anh2" src="../src/img/Frame.png"></img>
      </div>
      <div className='logo-alta'>
            <img src="../src/img/logo.png"/>
        </div >
        <div>
          <form>
            <span className="tx1">Đặt lại mật khẩu</span>
            <span className="tx2">Vui lòng nhập email để đặt lại mật khẩu của bạn *</span>
            <input
            id="forgotemail"
              type="email" 
              name="email"
              required
             
            />
            <div>
              <button className="btn2" type='button' onClick={() => navigate("..")}>Hủy</button>
              <Link  to="/passwordReset">
              <button  className="btn1">Tiếp tục</button>
              </Link>
            </div>
          </form>
            
          </div>
      </div>
    )
  }

  export default ForgotPassword
  