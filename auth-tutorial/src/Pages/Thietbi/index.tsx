import { PlusSquareOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import '../../css/thietbi.css'
import {TableThietBi} from '../../components/table';
import { Link } from 'react-router-dom';
function Thietbi() {
 
  return(
    <div>
      <MenuBar/>
  
      <TopBar breadCrumb='Thiết bị'/><RightOutlined className='icon1'/><span className='txtds'>Danh sách thiết bị</span>
      <span className='bieudocapso'>Danh sách thiết bị</span>
     
      <span className='txttb1'>Trạng thái hoạt động 
        <select   className="trangthaithietbi2">
        <option className="txt-selectbox" value="ngay">Tất cả</option>
        <option className="txt-selectbox" value="tuan">Kết nối</option>
        <option className="txt-selectbox" value="thang">Mất kết nối</option>
      </select></span>
      <span className='txttb2'>Trạng thái kết nối <select   className="trangthaithietbi1">
        <option className="txt-selectbox" value="ngay">Tất cả</option>
        <option className="txt-selectbox" value="tuan">Hoạt động</option>
        <option className="txt-selectbox" value="thang">Ngưng hoạt động</option>
      </select>
      </span>
      <div>
        <span className='tukhoa'>Từ khóa</span>
        <input id='timkiem'
        placeholder="Nhập từ khóa">
        </input> 
      <SearchOutlined style={{color:'#FF7506'}} className='tim'/>
      </div>
      <TableThietBi/>
      <Link to='/themthietbi'>
      <div className='themthietbi'>
       <PlusSquareOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Thêm<br/>thiết bị</span>
      </div>
      </Link>
      </div>
  )
}
export default Thietbi