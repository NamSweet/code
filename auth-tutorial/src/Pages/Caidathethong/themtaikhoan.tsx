
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import '../../css/thietbi.css'
import { Password } from 'primereact/password';
import { useState } from 'react';
import { add } from '../../firebase/crud';
import { message } from 'antd';

function ThemTaiKhoan() {
  
  const [tenDangnhap, settenDangnhap] = useState("")
  const [hoTen, sethoTen] = useState("")
  const [sdt, setSDT] = useState("")
  const [Email, setEmail] = useState("")
  const [vaiTro, setvaiTro] = useState("")
  const [tinhTrang, settinhTrang] = useState("")
  const [matKhau, setmatKhau] = useState("")
  
  const handleAdd = async () => {
    try {
     await add({data: {tenDangnhap: tenDangnhap, hoTen: hoTen, sdt: sdt, Email: Email,vaiTro: vaiTro ,matKhau:matKhau, tinhTrang: tinhTrang}, collectionName: "TaiKhoan", id: tenDangnhap})
    message.success("Thanh cong")
    } catch (error) {
     message.error("That bai")
    }
   }
  const breadCrumbData = [ "Cài đặt hệ thống","Quản lý tài khoản","Thêm tài khoản"]
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
        onChange={(e)=> sethoTen(e.target.value)}
        placeholder="Nhập họ tên">
        </input>
        <span className='ma'>Số điện thoại: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
       onChange={(e)=> setSDT(e.target.value)}
        placeholder="Nhập số điện thoại">
        </input>
        <span className='ma'>Email: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
        type='email'
       onChange={(e)=> setEmail(e.target.value)}
        placeholder="Nhập email">
        </input>
        <span className='ma'>Vai trò: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan" onChange={(e)=> setvaiTro(e.target.value)}>
      <option className="" value="">Chọn vai trò</option>
        <option className="" value="Kế toán">Kế toán</option>
        <option className="" value="Quản lý">Quản lý</option>
        <option className="" value="Admin">Admin</option>
      </select>
      <span className='txtcanhbao'><span style={{color: "#FF4747"}}>*</span>Là trường thông tin bắt buộc</span>

      </div>
      <div className='arearight'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747",}}>*</span></span>
      <input id='nhapvaitro1'
        onChange={(e)=> settenDangnhap(e.target.value)}
        placeholder="Nhập tên đăng nhập">
    
        </input>
        <div className='login-pass'>
        <span className='ma'>Mật khẩu: <span style={{color: "#FF4747",}}>*</span></span>
          <Password className='passwordtaikhoan' placeholder='Nhập mật khẩu' id='nhapvaitro1'onChange={(e)=> setmatKhau(e.target.value)} name='password'  toggleMask required/>
          </div>
          <div className='login-pass' style={{marginTop: 4}}>
        <span className='ma'>Nhập lại mật khẩu: <span style={{color: "#FF4747",}}>*</span></span>
          <Password className='passwordtaikhoan' id='nhapvaitro1' placeholder='Nhập lại mật khẩu' name='password'  toggleMask required/>
          </div>
          <span className='ma'>Tình trạng: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan" onChange={(e)=> settinhTrang(e.target.value)}>
        <option className="" value="Tất cả">Tất cả</option>
        <option className="" value="Ngưng hoạt động">Ngưng hoạt động</option>
        <option className="" value="Hoạt động">Hoạt động</option>
      </select>
      </div>
    </div>
    <div className='btnthemthietbi'>
        <Link to='/taikhoan'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'  onClick={handleAdd}>Thêm</button>
      </div>
    </div>
    
  )
}
export default ThemTaiKhoan