
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';

import { Link, useParams } from 'react-router-dom';
import '../../css/thietbi.css'
import { useEffect, useState } from 'react';
import { edit, getData } from '../../firebase/crud';
import { message } from 'antd';

interface ThietBi {
  maThietBi: string;
  tenThietbi: string;
  diaChiIP: string;
  trangThaiHD: string;
  trangThaiKN: string;
  dichVusudung: string;
  loaiThietbi: string;
  tenDangnhap: string;
  matKhau: string;
}

function Capnhat() {
  const {id} = useParams()
  const breadCrumbData = [ "Thiết bị","Danh sách thiết bị","Cập nhật thiết bị"]
  const [thietBi, setThietBi] = useState<ThietBi | undefined>();
  const [maThietBi, setMaThietBi] = useState("")
  const [tenThietbi, setTenThietBi] = useState("")
  const [diaChiIP, setDiaChiIP] = useState("")
  const [dichVusudung, setDichVuSuDung] = useState("")
  const [loaiThietbi, setLoaiThietBi] = useState("")
  const [tenDangnhap, setTenDangNhap] = useState("")
  const [matKhau, setMatKhau] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
       if(id) {
        const data = await getData({ collectionName: 'ThietBi',id:  id});
        setThietBi(data as ThietBi);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  fetchData();
  }, []);

  useEffect(() => { 
    if(thietBi) {
      setMaThietBi(thietBi.maThietBi)
      setDiaChiIP(thietBi.diaChiIP)
      setDichVuSuDung(thietBi.dichVusudung)
      setTenDangNhap(thietBi.tenDangnhap)
      setTenThietBi(thietBi.tenThietbi)
      setLoaiThietBi(thietBi.loaiThietbi)
      setMatKhau(thietBi.matKhau)
    }
  },[thietBi])

  const handleUpdate = async () => {
    try {
      if(id) {
        await edit({data: {maThietBi: maThietBi, tenThietbi: tenThietbi, diaChiIP: diaChiIP, dichVusudung: dichVusudung,loaiThietbi: loaiThietbi,tenDangnhap:tenDangnhap,matKhau:matKhau }, collectionName: "ThietBi", id: maThietBi})
        message.success("Thanh cong")
      }
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
        <input id='nhapdulieu2'
        placeholder="Nhập mã thiết bị"
        value={maThietBi}
        onChange={(e)=> setMaThietBi(e.target.value)}
        readOnly>
        </input>
        </div> 
        <div className='input'>
        <span className='ma'>Loại thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
         <select className="nhapdulieu" style={{ color:'black'}} value={loaiThietbi} onChange={(e)=> setLoaiThietBi(e.target.value)}>
         <option value='' >Chọn loại thiết bị</option>
          <option value='Kiosk' >Kiosk</option>
          <option value='Display counter'>Display counter</option>
         </select>
        </div> 
        <div className='input'>
      <span className='ma'>Tên thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Nhập tên thiết bị"
        value={tenThietbi}
        onChange={(e)=> setTenThietBi(e.target.value)}>
        </input>
        </div>
        <div className='input'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Nhập tên đăng nhập"
        value={tenDangnhap}
        onChange={(e)=> setTenDangNhap(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Địa chỉ IP: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Nhập địa chỉ IP"
        value={diaChiIP}
        onChange={(e)=> setDiaChiIP(e.target.value)}>
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Mật khẩu:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Nhập mật khẩu"
        value={matKhau}
        onChange={(e)=> setMatKhau(e.target.value)}>
        </input>
        </div>  
        <div className='input'>
      <span className='ma'>Dịch vụ sử dụng:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='inputdvsd' placeholder='Nhập dịch vụ sử dụng' value={dichVusudung} onChange={(e)=> setDichVuSuDung(e.target.value)}>
        </input>
        </div> 
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className='btnthemthietbi'>
        <Link to='/Thietbi'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew' onClick={handleUpdate}>Cập nhật</button>
      </div>
    </div>
    
  )
}
export default Capnhat