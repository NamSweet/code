
import { TbBellFilled } from "react-icons/tb";
import { HiOutlineCamera } from "react-icons/hi";
import { Link} from 'react-router-dom';
import MenuBar from '../components/menu_bar';



function Profile() {
  return(
    <div>
      <MenuBar/>
      <div className='chitietthongtin'>
        <img className='avt2' src="../src/img/avatar2.png"/>
        <button className='thayavt'><span className='camera'><HiOutlineCamera size={30}/></span></button>
        <span className='tx8'>Lê Quỳnh Ái Vân</span>
        <div className=''>
           <span className='tenuser'>Tên người dùng</span>
            <input
             id='tenuser'
              required
              placeholder="Lê Quỳnh Ái Vân"
            />
             <span className='sdt'>Số điện thoại</span>
            <input
             id='sdt'
              required
              placeholder="0767375921"
            />
             <span className='email'>Email:</span>
            <input
             id='email'
              required
              placeholder="adminSSO1@domain.com"
            />
             <span className='tenlogin'>Tên đăng nhập</span>
            <input
             id='tenlogin'
              required
              placeholder="lequynhaivan01"
            />
             <span className='matkhau'>Mật khẩu</span>
            <input
             id='matkhau'
              required
              placeholder="311940211"
            />
             <span className='vaitro'>Vai trò:</span>
            <input
             id='vaitro'
              required
              placeholder="Kế toán"
            />
          </div >
          
      </div>
      <div className='thongtincanhan'>
      <Link to='/profile'><img className='avt1' src="../src/img/avatar1.png"/></Link>
        <span className='tx5'>Thông tin cá nhân</span>
        <button className='btnthongbao'><span className='bell'><TbBellFilled/></span></button>
        <span className='tx6'>Xin chào</span>
      <span className='tx7'>Lê Quỳnh Ái Vân</span>
      </div>
    </div>
  )
}
export default Profile
