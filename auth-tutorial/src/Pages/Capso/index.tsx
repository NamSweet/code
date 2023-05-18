import { CaretRightOutlined, PlusSquareOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import Datepicker from '../../components/datepicker';
import { TableCapso } from '../../components/tablecapso';
import '../../css/capso.css'
import { Link } from 'react-router-dom';


function Capso() {
  const breadCrumbData = [ "Cấp số", "Danh sách cấp số"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý cấp số</span>
      <div className='area10'>
        <div>
      <span className='txttb10'>Tên dịch vụ </span>
     <select   className="capso2023">
        <option className="" value="">Tất cả</option>
        <option className="" value="">Khám sản - Phụ khoa</option>
        <option className="" value="">Khám răng hàm mặt</option>
        <option className="" value="">Khám tai mũi họng</option>
      </select>
      </div>
      <div>
      <span className='txttb10'>Tình trạng</span>
     <select className="capso2023">
        <option className="" value="">Tất cả</option>
        <option className="" value="">Đang chờ</option>
        <option className="" value="">Đã sử dụng</option>
        <option className="" value="">Bỏ qua</option>
      </select>
      </div>
      <div>
      <span className='txttb10'>Nguồn cấp</span>
      <select   className="capso2023">
        <option className="" value="">Tất cả</option>
        <option className="" value="">Kiosk</option>
        <option className="" value="">Hệ thống</option>
      </select>
      </div>
      <div><span className='txtchontime'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cccs1'/></div>
      <div>
      <span className='txtchontime'>Từ khóa</span>
        <input id='timkiemdv'
        placeholder="Nhập từ khóa">
        </input> 
         <SearchOutlined style={{color:'#FF7506'}} className='timso2'/>
      </div>
      </div> 
      <div>
        <TableCapso/>
      </div>
      <Link to='/capsomoi'>
      <div className='themthietbi'>
       <PlusSquareOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Cấp<br/>số mới</span>
      </div>
      </Link>
    </div>
  )
}
export default Capso