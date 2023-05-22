
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import '../../css/thietbi.css'
import { Password } from 'primereact/password';

function CapnhatTaiKhoan() {
  
  const breadCrumbData = [ "Cài đặt hệ thống","Quản lý tài khoản","Cập nhật tài khoản"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý tài khoản</span>
      <div className='bgrcapnhatvaitro'>
      <span className='txtthongtin'>Thông tin tài khoản</span>
      <div className='arealeft'>
      <span className='ma'>Họ tên: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
        defaultValue="Nguyen Van A"
        placeholder="Nhập họ tên">
        </input>
        <span className='ma'>Số điện thoại: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
        defaultValue="0902345678"
        placeholder="Nhập số điện thoại">
        </input>
        <span className='ma'>Email: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
        defaultValue="NguyenA154@gmail.com"
        placeholder="Nhập email">
        </input>
        <span className='ma'>Vai trò: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan">
        <option className="" value="ngay">Kế toán</option>
        <option className="" value="tuan">Quản lý</option>
        <option className="" value="thang">Admin</option>
      </select>
      <span className='txtcanhbao'><span style={{color: "#FF4747"}}>*</span>Là trường thông tin bắt buộc</span>

      </div>
      <div className='arearight'>
      <span className='ma'>Tên đăng nhập:: <span style={{color: "#FF4747",}}>*</span></span>
      <input id='nhapvaitro1'
        defaultValue="tuyetnguyen123"
        placeholder="Nhập tên đăng nhập">
    
        </input>
        <div className='login-pass'>
        <span className='ma'>Mật khẩu: <span style={{color: "#FF4747",}}>*</span></span>
          <Password className='passwordtaikhoan' id='nhapvaitro1'defaultValue="Tuyetnguyen123" name='password'  toggleMask required/>
          </div>
          <div className='login-pass' style={{marginTop: 4}}>
        <span className='ma'>Nhập lại mật khẩu: <span style={{color: "#FF4747",}}>*</span></span>
          <Password className='passwordtaikhoan' id='nhapvaitro1'defaultValue="Tuyetnguyen123" name='password'  toggleMask required/>
          </div>
          <span className='ma'>Tình trạng: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan">
        <option className="" value="ngay">Tất cả</option>
        <option className="" value="tuan">Ngưng hoạt động</option>
        <option className="" value="thang">Hoạt động</option>
      </select>
      </div>
    </div>
    <div className='btnthemthietbi'>
        <Link to='/taikhoan'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'>Cập nhật</button>
      </div>
    </div>
    
  )
}
export default CapnhatTaiKhoan