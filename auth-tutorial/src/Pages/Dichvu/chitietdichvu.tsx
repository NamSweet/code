import {  CaretRightOutlined, FormOutlined, RollbackOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import { Link, useParams } from 'react-router-dom';
import Datepicker from '../../components/datepicker';
import { Tablechitietchvu } from '../../components/tablechitietdichvu';
import { useEffect, useState } from 'react';
import { getData } from '../../firebase/crud';

interface DichVu {
  maDichVu: string;
  tenDichVu: string;
  moTa: string;
}

function Chitietdichvu() {
  const {id} = useParams()
  const breadCrumbData = [ "Dịch vụ","Danh sách dịch vụ","Chi tiết"]
  const [DichVu, setDichVu] = useState<DichVu | undefined>();


  useEffect(() => {
    const fetchData = async () => {
      try {
       if(id) {
        const data = await getData({ collectionName: 'DichVu',id:  id});
        setDichVu(data as DichVu);
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
      <span className='bieudocapso'>Quản lý dịch vụ</span>
        <div className='ttdv'>
            <div>
            <span className='txtthongtin'>Thông tin dịch vụ</span>
            </div>
         <div className='area6'>
         <div className=''>
            <h1 className='mathietbi'>Mã dịch vụ:  <span className='txtctdv1'>{DichVu?.maDichVu}</span></h1>
            </div>
            <div className=''>
            <h1 className='mathietbi'>Tên dịch vụ:  <span className='txtctdv2'>{DichVu?.tenDichVu}</span></h1>
            </div>
            <div className=''>
            <h1 className='mathietbi'>Mô tả: <span className='txtctdv3'>{DichVu?.moTa}</span></h1>
            <div className='meme'>
            <span className='dvtttxt'>Quy tắc cấp số</span>
            </div>
            </div>
         </div>
         <div className='area7'>
         <div>
            <span className='cce'>Tăng tự động từ: </span>
            <input id='sott'
                placeholder="0001">
                </input>
                <span className='cce'>Đến</span>
                <input id='sott'
                placeholder="9999">
                </input>
            </div>
            <div>
            <span className='cce'>Prefix: </span>
                    <input id='sott1'
                placeholder="0001">
                </input>
            </div>
            <div>
            <span className='cce'>Reset mỗi ngày </span>
            </div>
            <div>
            <span>Ví dụ: 201-2001</span>
            </div>
         </div>
        </div>
        <div className='bangchitietne'>
        <div className='area8'>
        <div>
      <span className='txttb10'>Trạng thái</span>
       <select   className="trangthaidichvu20">
        <option className="" value="">Tất cả</option>
        <option className="" value="">Đã hoàn thành</option>
        <option className="" value="">Đã thực hiện</option>
        <option className="" value="">Vắng</option>
      </select>
      </div>
      <div><span className='txtchontime'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cctv'/></div>
      <div>
      <span className='txtchontime'>Từ khóa</span>
        <input id='timkiemdv'
        placeholder="Nhập từ khóa">
        </input> 
      <SearchOutlined style={{color:'#FF7506'}} className='timem'/>
      </div>
        </div>
        <div className='area9'>
        <Tablechitietchvu/>
        </div>
        </div>
        <Link to={`/capnhatdichvu/${id}`}>
      <div className='themthietbihehe'>
       <FormOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Cập nhật<br/>danh sách</span>
      </div>
      </Link>
      <Link to='/dichvu'>
      <div className='themthietbihoho'>
       <RollbackOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Quay lại</span>
      </div>
      </Link>
      </div>
      
  )
}
export default Chitietdichvu