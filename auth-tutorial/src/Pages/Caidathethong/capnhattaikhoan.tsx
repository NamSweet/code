
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link, useParams } from 'react-router-dom';
import '../../css/thietbi.css'
import { Password } from 'primereact/password';
import { edit, getData } from '../../firebase/crud';
import { message } from 'antd';
import { useEffect, useState } from 'react';
interface TaiKhoan {
  tenDangnhap: string;
  hoTen: string;
  sdt:string;
  Email: string;
  vaiTro: string;
  tinhTrang: string;
 matKhau: string,
}
function CapnhatTaiKhoan() {
  const {id} = useParams()
  const [taiKhoan, setTaiKhoan] = useState<TaiKhoan | undefined>();
  const [tenDangnhap, settenDangnhap] = useState("")
  const [hoTen, sethoTen] = useState("")
  const [sdt, setSDT] = useState("")
  const [Email, setEmail] = useState("")
  const [vaiTro, setvaiTro] = useState("")
  const [tinhTrang, settinhTrang] = useState("")
  const [matKhau, setmatKhau] = useState("")
  const [nhapLaiMK, setNhapLaiMK] = useState("")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       if(id) {
          const data = await getData({ collectionName: 'TaiKhoan',id:  id});
          setTaiKhoan(data as TaiKhoan)
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  fetchData();
  }, []);
console.log(taiKhoan)

  useEffect(() => { 
    if(taiKhoan) {
      settenDangnhap(taiKhoan.tenDangnhap)
      sethoTen(taiKhoan.hoTen)
      setSDT(taiKhoan.sdt)
      setEmail(taiKhoan.Email)
      setvaiTro(taiKhoan.vaiTro)
      settinhTrang(taiKhoan.tinhTrang) 
      setmatKhau(taiKhoan.matKhau)
    setNhapLaiMK(taiKhoan.matKhau)
    }
  },[taiKhoan])

  const handleUpdate = async () => {
    try {
      if(id) {
        if(matKhau.includes(nhapLaiMK)) {
          await edit({data: {tenDangnhap: tenDangnhap, hoTen: hoTen, sdt: sdt, Email: Email,vaiTro: vaiTro ,matKhau:matKhau, tinhTrang: tinhTrang}, collectionName: "TaiKhoan", id: tenDangnhap})
          message.success("Thanh cong")
      } else {
        message.warning("Mat khau va nhap lai mat khau khong trung khop!")
      }
      }
    } catch (error) {
      message.error("That bai")
    }
  }
 
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
        value={hoTen}
         onChange={(e)=> sethoTen(e.target.value)}
        placeholder="Nhập họ tên">
        </input>
        <span className='ma'>Số điện thoại: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
          value={sdt}
       onChange={(e)=> setSDT(e.target.value)}
        placeholder="Nhập số điện thoại">
        </input>
        <span className='ma'>Email: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapvaitro1'
          value={Email}
       onChange={(e)=> setEmail(e.target.value)}
        placeholder="Nhập email">
        </input>
        <span className='ma'>Vai trò: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan" onChange={(e)=> setvaiTro(e.target.value)}   value={vaiTro}>
        <option className="" value="Kế toán">Kế toán</option>
        <option className="" value="Quan lý">Quản lý</option>
        <option className="" value="Admin">Admin</option>
      </select>
      <span className='txtcanhbao'><span style={{color: "#FF4747"}}>*</span>Là trường thông tin bắt buộc</span>

      </div>
      <div className='arearight'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747"}}>*</span></span>
      <input id='nhapvaitro1'
        value={tenDangnhap}
        onChange={(e)=> settenDangnhap(e.target.value)}
        placeholder="Nhập tên đăng nhập"
        readOnly>
    
        </input>
        <div className='login-pass'>
        <span className='ma'>Mật khẩu: <span style={{color: "#FF4747"}}>*</span></span>
          <Password className='passwordtaikhoan' placeholder='Nhập họ tên' id='nhapvaitro1' value={matKhau} onChange={(e)=> setmatKhau(e.target.value)} name='password'  toggleMask required/>
          </div>
          <div className='login-pass' style={{marginTop: 4}}>
        <span className='ma'>Nhập lại mật khẩu: <span style={{color: "#FF4747",}}>*</span></span>
          <Password className='passwordtaikhoan' placeholder='Nhập lại họ tên' id='nhapvaitro1'name='password' value={nhapLaiMK} onChange={(e)=> setNhapLaiMK(e.target.value)}  toggleMask required/>
          </div>
          <span className='ma'>Tình trạng: <span style={{color: "#FF4747",}}>*</span></span>
      <select   className="selectvaitrotaikhoan" value={tinhTrang} onChange={(e)=> settinhTrang(e.target.value)}>
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
        <button className='thietbinew' onClick={handleUpdate}>Cập nhật</button>
      </div>
    </div>
    
  )
}
export default CapnhatTaiKhoan