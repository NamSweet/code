import { FormOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link, useParams } from 'react-router-dom';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { getData } from '../../firebase/crud';

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

function Chitiet() {
  const {id} = useParams()
  const breadCrumbData = [ "Thiết bị","Danh sách thiết bị","Chi tiết thiết bị"]
  const [thietBi, setThietBi] = useState<ThietBi | undefined>();

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
      <span className='txtchitiet'>{thietBi?.maThietBi}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 39}}>Tên thiết bị:</span>
      <span className='txtchitiet'>{thietBi?.tenThietbi}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 51}}>Địa chỉ IP:</span>
      <span className='txtchitiet'>{thietBi?.diaChiIP}</span>
      </div>
</Space>
<Space direction='vertical' size={16}>
<div className=''>
      <span className='mathietbi' style={{marginRight: 69}}>Loại thiết bị:</span>
      <span className='txtchitiet'>{thietBi?.loaiThietbi}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 46}}>Tên đăng nhập:</span>
      <span className='txtchitiet'>{thietBi?.tenDangnhap}</span>
      </div>
      <div className=''>
      <span className='mathietbi' style={{marginRight: 87}}>Mật khẩu:</span>
      <span className='txtchitiet'>{thietBi?.matKhau}</span>
      </div>
</Space>
      <div className=''>
      <h1 className='mathietbi'>Dịch vụ sử dụng: </h1>
      <span className='txtchitiet2'>{thietBi?.dichVusudung}.</span>
      </div>
      </div>
      </div>
      <Link to={`/Capnhatthietbi/${id}`}>
      <div className='themthietbi'>
       <FormOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Cập nhật<br/>thiết bị</span>
      </div>
      </Link>
    </div>
  )
}
export default Chitiet