import { RollbackOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link, useParams } from 'react-router-dom';
import { Badge, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getData } from '../../firebase/crud';

function Chitietcapso() {
  interface CapSo {
    stt: string;
    tenKhachhang: string;
    tenDichvu: string;
    thoiGiancap: string;
    hanSudung: string;
    trangThaihoatdong:string;
    nguonCap:string;
  }
  const {id} = useParams()
  const breadCrumbData = [ "Cấp số","Danh sách cấp số","Chi tiết"]
  const [CapSo, setCapSo] = useState<CapSo | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
       if(id) {
        const data = await getData({ collectionName: 'CapSo',id:  id});
        setCapSo(data as CapSo);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  fetchData();
  }, []);

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
      <span className='txtchitiet'>{CapSo?.tenKhachhang}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 39}}>Tên dịch vụ:</span>
      <span className='txtchitiet'>{CapSo?.tenDichvu}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 55}}>Số thứ tự:</span>
      <span className='txtchitiet'>{CapSo?.stt}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 24}}>Thời gian cấp:</span>
      <span className='txtchitiet'>{CapSo && new Date(CapSo.thoiGiancap).toLocaleString("vi-VN", {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
})}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 29}}>Hạn sử dụng:</span>
      <span className='txtchitiet'>{CapSo && new Date(CapSo.hanSudung).toLocaleString("vi-VN", {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
})}</span>
      </div>
</Space>
<Space direction='vertical' size={16}>
<div className=''>
      <span className='mathietbi' style={{marginRight: 40}}>Nguồn cấp:</span>
      <span className='txtchitiet'>{CapSo?.nguonCap}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 46}}>Trạng thái:</span>
      <span className='txtchitiet'><Badge color="#4277FF"/>{" "}{CapSo?.trangThaihoatdong}</span>
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