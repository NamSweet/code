import { RightOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Themthietbi() {
  const [selectBorderColor, setSelectBorderColor] = useState<string>('');
  const changeBorderColor = () => {
    setSelectBorderColor('#FFAC6A');
  };
  const breadCrumbData = [ "Thiết bị","Danh sách thiết bị","Thêm thiết bị"]
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
        placeholder="Nhập mã thiết bị">
        </input>
        </div> 
        <div className='input'>
        <span className='ma'>Loại thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
         <select className="nhapdulieu" style={{ borderColor: selectBorderColor }} onClick={changeBorderColor}>
        <option className="" value='' >Chọn loại thiết bị</option>
        <option className="" value='Kiosk'>Kiosk</option>
        <option className="" value='Display counter'>Display counter</option>
         </select>
        </div> 
        <div className='input'>
      <span className='ma'>Tên thiết bị: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tên thiết bị">
        </input>
        </div>
        <div className='input'>
      <span className='ma'>Tên đăng nhập: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập tài khoản">
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Địa chỉ IP: <span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập địa chỉ IP">
        </input>
        </div> 
        <div className='input'>
      <span className='ma'>Mật khẩu:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu'
        placeholder="Nhập mật khẩu">
        </input>
        </div>  
        <div className='input'>
      <span className='ma'>Dịch vụ sử dụng:<span style={{color: "#FF4747",}}>*</span></span>
        <input id='nhapdulieu1'
        placeholder="Nhập dịch vụ sử dụng">
        </input>
        </div> 
        <span className='txtcanhbao'><span style={{color: "#FF4747",}}>*</span>Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className='btnthemthietbi'>
      <Link to='/Thietbi'>
        <button className='huythietbi'>Hủy bỏ</button>
        </Link>
        <button className='thietbinew'>Thêm thiết bị</button>
      </div>
    </div>
    
  )
}
export default Themthietbi