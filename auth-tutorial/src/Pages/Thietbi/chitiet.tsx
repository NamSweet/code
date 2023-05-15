import { FormOutlined, RightOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';

function Chitiet() {
 
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb='Thiết bị'/>
      <RightOutlined className='icon1'/>
      <Link to='/Thietbi'>
      <span className='txtds1'>Danh sách thiết bị</span>
      </Link>
      <RightOutlined className='icon23'/>
      
      <span className='txtttb'>Chi tiết thiết bị</span>
   
      <span className='bieudocapso'>Quản lý thiết bị</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin thiết bị</span>
      <div className='area2'>
        <div className=''>
      <h1 className='mathietbi'>Mã thiết bị: <span className='txtchitiet'>KIO_01</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Loại thiết bị: <span className='txtchitiet'>Kiosk</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Tên thiết bị: <span className='txtchitiet'>Kiosk</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Tên đăng nhập: <span className='txtchitiet'>Linhkyo011</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Địa chỉ IP: <span className='txtchitiet'>128.172.308</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Mật khẩu: <span className='txtchitiet'>CMS</span></h1>
      </div>
      <div className=''>
      <h1 className='mathietbi'>Dịch vụ sử dụng: </h1>
      <span className='txtchitiet2'>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
      </div>
      </div>
     
      
      </div>

      <Link to='/capnhatthietbi'>
      <div className='themthietbi'>
       <FormOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Thêm<br/>thiết bị</span>
      </div>
      </Link>
    </div>
  )
}
export default Chitiet