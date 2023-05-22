import { PlusSquareOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import '../../css/vaitro.css'
import { TableVaitro } from '../../components/tablevaitro';
import { Link } from 'react-router-dom';

function Vaitro() {
  const breadCrumbData = ["Cài đặt hệ thống","Vai trò"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Danh sách vai trò</span>
      <div className='area11'>
      <div>
      <span className='txtimkiemvaitro'>Từ khóa</span>
        <input id='timkiemvt'
        placeholder="Nhập từ khóa">
        </input> 
        <SearchOutlined style={{color:'#FF7506'}} className='icontimvaitro'/>
      </div>
    </div>
    <TableVaitro/>
    <Link to='/themvaitro'>
      <div className='themthietbi'>
       <PlusSquareOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Thêm<br/>Vai trò</span>
      </div>
      </Link>
    </div>
  )
}
export default Vaitro