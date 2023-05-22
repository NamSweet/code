
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { add } from '../../firebase/crud';
import { message } from 'antd';

function Themthietbi() {
  const [selectBorderColor, setSelectBorderColor] = useState<string>('');
  const [maThietBi, setMaThietBi] = useState("")
  const [tenThietbi, setTenThietBi] = useState("")
  const [diaChiIP, setDiaChiIP] = useState("")
  const [dichVusudung, setDichVuSuDung] = useState("")
  const [loaiThietbi, setLoaiThietBi] = useState("")
  const [tenDangnhap, setTenDangNhap] = useState("")
  const [matKhau, setMatKhau] = useState("")
  const changeBorderColor = () => {
    setSelectBorderColor('#FFAC6A');
  };
  const breadCrumbData = [ "Thiết bị","Danh sách thiết bị","Thêm thiết bị"]

const handleAdd = async () => {
 try {
  await add({data: {maThietBi: maThietBi, tenThietbi: tenThietbi, diaChiIP: diaChiIP, dichVusudung: dichVusudung,loaiThietbi: loaiThietbi,tenDangnhap:tenDangnhap,matKhau:matKhau }, collectionName: "ThietBi", id: maThietBi})
 message.success("Thanh cong")
 } catch (error) {
  message.error("That bai")
 }
}

  return(
    
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý thiết bị</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin thiết bị</span>
      <div className='area1'>
      <div className='input'>
      <span className='ma'>Mã thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập mã thiết bị"
        onChange={(e)=> setMaThietBi(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
        <span className='ma'>Loại thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
         <select className="nhapdulieu" style={{ borderColor: selectBorderColor }}  onChange={(e)=> setLoaiThietBi(e.target.value)} onClick={changeBorderColor} value={loaiThietbi}>
            <option value='' >Chọn loại thiết bị</option>
            <option value='Kiosk'>Kiosk</option>
            <option value='Display counter'>Display counter</option>
         </select>
        </div> 
        <div className='input'>
      <span className='ma'>Tên thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tên thiết bị"
        onChange={(e)=> setTenThietBi(e.target.value)}>
        
        </input>
        </div>
        <div className='input'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tài khoản"
        onChange={(e)=> setTenDangNhap(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Địa chỉ IP: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập địa chỉ IP"
        onChange={(e)=> setDiaChiIP(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Mật khẩu:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập mật khẩu"
        onChange={(e)=> setMatKhau(e.target.value)}>
        </input>
        </div>  
        <div className='input'>
      <span className='ma'>Dịch vụ sử dụng:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu1'
        placeholder="Nhập dịch vụ sử dụng"
        onChange={(e)=> setDichVuSuDung(e.target.value)}>
        </input>
        </div> 
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className='btnthemthietbi'>
      <Link to='/Thietbi'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew' onClick={handleAdd}>Thêm thiết bị</button>
      </div>
    </div>
    
  )
}
export default Themthietbi