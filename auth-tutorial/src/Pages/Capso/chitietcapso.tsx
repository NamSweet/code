import { RollbackOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link } from 'react-router-dom';
import { Badge, Space } from 'antd';

function Chitietcapso() {
  const breadCrumbData = [ "Cấp số","Danh sách cấp số","Chi tiết"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý cấp số</span>
      <div className='inputhemthietbi'>
      <span className='txtthongtin'>Thông tin cấp số</span>
      <div className='area2'>
<Space style={{marginRight: 326}} direction='vertical' size={16}>
<div >
      <span className='mathietbi' style={{marginRight: 73}}>Họ tên:</span>
      <span className='txtchitiet'>Nguyễn Thị Dung</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 39}}>Tên dịch vụ:</span>
      <span className='txtchitiet'>Khám tim mạch</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 55}}>Số thứ tự:</span>
      <span className='txtchitiet'>2001201</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 24}}>Thời gian cấp:</span>
      <span className='txtchitiet'>14:35 - 07/11/2021</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 29}}>Hạn sử dụng:</span>
      <span className='txtchitiet'>18:00 - 07/11/2021</span>
      </div>
</Space>
<Space direction='vertical' size={16}>
<div className=''>
      <span className='mathietbi' style={{marginRight: 40}}>Nguồn cấp:</span>
      <span className='txtchitiet'>Kiosk</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 46}}>Trạng thái:</span>
      <span className='txtchitiet'><Badge color="#4277FF"/> Đang chờ</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 24}}>Số điện thoại:</span>
      <span className='txtchitiet'>0948523623</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 25}}>Địa chỉ Email:</span>
      <span className='txtchitiet'>nguyendung@gmail.com</span>
      </div>
</Space>
      </div>
      </div>
      <Link to='/Capso'>
      <div className='themthietbi'>
      <RollbackOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Quay lại</span>
      </div>
      </Link>
    </div>
  )
}
export default Chitietcapso