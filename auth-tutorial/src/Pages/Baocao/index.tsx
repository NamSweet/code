
import { CaretRightOutlined, DownloadOutlined } from '@ant-design/icons';
import MenuBar from '../../components/menu_bar';
import TopBar from '../../components/top_bar';
import Datepicker from '../../components/datepicker';
import '../../css/capso.css'
import { TableBaocao } from '../../components/tablebaocao';


function Baocao() {
  const breadCrumbData = [ "Báo cáo", "Lập báo cáo"]

  return(
    <div>
      <MenuBar/>
      <TopBar breadCrumb={breadCrumbData}/>
     <div className='area10'>
     <div><span className='txtchontime'>Chọn thời gian<div className='cc'><Datepicker/><Datepicker/></div></span>
      <CaretRightOutlined className='cccs2'/></div>
      </div> 
      <div>
        <TableBaocao/>
      </div>
      <div style={{userSelect: "none", cursor: "pointer"}} className='themthietbi'>
       <DownloadOutlined className='iconthem'/>
       <span className='txtthemthietbi'>Tải về</span> 
      </div>
    </div>
  )
}
export default Baocao