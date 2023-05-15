import { RightOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';

import { Link } from 'react-router-dom';
import '../../css/thietbi.css'

function Capnhat() {

  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb='Thiết bị'/>
      <RightOutlined className='icon1'/>
      <Link to='/Thietbi'>
      <span className='txtds1'>Danh sách thiết bị</span>
      </Link>
      <RightOutlined className='icon23'/>
      <span className='txtttb'>Cập nhật</span>
      <span className='bieudocapso'>Quản lý thiết bị</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin thiết bị</span>
      <div className='area1'>
      <div className='input'>
      <span className='ma'>Mã thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="KIO_01">
        </input>
        </div> 
        <div className='input'>
        <span className='ma'>Loại thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
         <select className="nhapdulieu" style={{ color:'black'}}>
        <option className="" value='' >Kiosk</option>
        <option className="" value='Display counter'>Display counter</option>
         </select>
        </div> 
        <div className='input'>
      <span className='ma'>Tên thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Kiosk">
        </input>
        </div>
        <div className='input'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="Linhkyo011">
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Địa chỉ IP: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="128.172.308">
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Mật khẩu:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu2'
        placeholder="128.172.308">
        </input>
        </div>  
        <div className='input'>
      <span className='ma'>Dịch vụ sử dụng:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='inputdvsd'>
        </input>
        </div> 
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className='btnthemthietbi'>
        <Link to='/Thietbi'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'>Cập nhật</button>
      </div>
    </div>
    
  )
}
export default Capnhat