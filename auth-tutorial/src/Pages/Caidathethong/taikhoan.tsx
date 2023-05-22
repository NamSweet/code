import { PlusSquareOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import '../../css/taikhoan.css'
import { Link } from 'react-router-dom';
import { TableTaikhoan } from '../../components/tabletaikhoan';

function Taikhoan() {
  const breadCrumbData = ["Cài đặt hệ thống","Quản lý tài khoản"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
      <span className='bieudocapso'>Danh sách tài khoản</span>
      <div className='area11'>
      <div>
      <span className='txtimkiemtaikhoan'>Tên vai trò</span>
      <select   className="selectvaitro">
        <option className="" value="ngay">Kế toán</option>
        <option className="" value="tuan">Quản lý</option>
        <option className="" value="thang">Admin</option>
      </select>
      </div>
      <div className='timkiemtaikhoan'>
      <span className='txtimkiemtaikhoan'>Từ khóa</span>
        <input id='inputtaikhoan'
        placeholder="Nhập từ khóa">
        </input> 
        <SearchOutlined style={{color:'#FF7506'}} className='icontimvaitro'/>
      </div>
    </div>
    <TableTaikhoan/>
    <Link to='/themtaikhoan'>
      <div className='themthietbi'>
       <PlusSquareOutlined className='iconthem'/>
        <span className='txtthemthietbi'>Thêm<br/>Tài khoản</span>
      </div>
      </Link>
    </div>
  )
}
export default Taikhoan