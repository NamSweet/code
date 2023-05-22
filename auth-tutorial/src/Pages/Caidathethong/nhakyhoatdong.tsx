
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import Datepicker from '../../components/datepicker';
import '../../css/capso.css'
import { TableNhatky } from '../../components/tablenhatky';


function Nhatky() {
  const breadCrumbData = [ "Cài đặt hệ thống", "Nhật ký hoạt động"]
  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
     <div className='area10'>
     <div><span className='txtchontime'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cccs2'/></div>
      <div className='timkiemtaikhoan' style={{marginLeft:523}}>
      <span className='txtimkiemtaikhoan'>Từ khóa</span>
        <input id='inputtaikhoan'
        placeholder="Nhập từ khóa"
        style={{width: 240}}>
        </input> 
        <SearchOutlined style={{color:'#FF7506'}} className='icontimvaitro'/>
      </div>
      </div> 
      <div>
        <TableNhatky/>
      </div>
    </div>
  )
}
export default Nhatky