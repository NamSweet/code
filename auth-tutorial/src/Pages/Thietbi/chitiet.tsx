import { FormOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { Space } from 'antd';

function Chitiet() {
  const breadCrumbData = [ "Thiết bị","Danh sách thiết bị","Chi tiết thiết bị"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý thiết bị</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin thiết bị</span>
      <div className='area2'>
<Space style={{marginRight: 326}} direction='vertical' size={16}>
<div >
      <span className='mathietbi' style={{marginRight: 43}}>Mã thiết bị:</span>
      <span className='txtchitiet'>KIO_01</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 39}}>Tên thiết bị:</span>
      <span className='txtchitiet'>Kiosk</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 51}}>Địa chỉ IP:</span>
      <span className='txtchitiet'>128.172.308</span>
      </div>
</Space>
<Space direction='vertical' size={16}>
<div className=''>
      <span className='mathietbi' style={{marginRight: 69}}>Loại thiết bị:</span>
      <span className='txtchitiet'>Kiosk</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 46}}>Tên đăng nhập:</span>
      <span className='txtchitiet'>Linhkyo011</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 87}}>Mật khẩu:</span>
      <span className='txtchitiet'>CMS</span>
      </div>
</Space>
      <div className=''>
      <h1 className='mathietbi'>Dịch vụ sử dụng: </h1>
      <span className='txtchitiet2'>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
      </div>
      </div>
     
      
      </div>

      <Link to='/capnhatthietbi'>
      <div className='themthietbi'>
       <FormOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Cập nhật<br/>thiết bị</span>
      </div>
      </Link>
    </div>
  )
}
export default Chitiet