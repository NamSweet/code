import { CaretRightOutlined, PlusSquareOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import '../../css/dichvu.css'
import Datepicker from '../../components/datepicker';
import { TableDichvu } from '../../components/tabledichvu';
import { Link } from 'react-router-dom';
function Dichvu() {
  const breadCrumbData = [ "Dịch vụ","Danh sách dịch vụ"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Quản lý dich vụ</span>
      <div>
      <span className='txttb1'>Trạng thái hoạt động<select   className="trangthaithietbi2">
        <option className="txt-selectbox" value="ngay">Tất cả</option>
        <option className="txt-selectbox" value="tuan">Kết nối</option>
        <option className="txt-selectbox" value="thang">Mất kết nối</option>
      </select></span>
      </div>
      <div>
      <span className='txttb2'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cc1'/>
      </div>
      <div>
        <span className='tukhoa'>Từ khóa</span>
        <input id='timkiem'
        placeholder="Nhập từ khóa">
        </input> 
      <SearchOutlined style={{color:'#FF7506'}} className='tim'/>
      </div>
      <TableDichvu/>
      <Link to='/Dichvu/themdichvu'>
      <div className='themthietbi'>
       <PlusSquareOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Thêm<br/>dịch vụ</span>
      </div>
      </Link>
    </div>
  )
}
export default Dichvu